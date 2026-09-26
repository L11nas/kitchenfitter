// Renders every page listed in public/sitemap.xml to static HTML after `vite build`,
// so search engines get each page's title, meta tags and content without running JavaScript.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const { render, pageRoutes } = await import(
  pathToFileURL(join(ssrDir, 'entry-server.js')).href
);

const template = readFileSync(join(distDir, 'index.html'), 'utf-8');
const sitemap = readFileSync(join(root, 'public', 'sitemap.xml'), 'utf-8');
const manifest = JSON.parse(
  readFileSync(join(distDir, '.vite', 'manifest.json'), 'utf-8'),
);

// CSS and JS of a lazily loaded page, so it is styled before its chunk loads
function pageAssets(file) {
  const css = new Set();
  const js = new Set();
  const visit = (key) => {
    const chunk = manifest[key];
    if (!chunk || chunk.isEntry) return;
    js.add(chunk.file);
    chunk.css?.forEach((c) => css.add(c));
    chunk.imports?.forEach(visit);
  };
  visit(file);
  return [
    ...[...css].map((href) => `<link rel="stylesheet" href="/${href}">`),
    ...[...js].map((href) => `<link rel="modulepreload" href="/${href}">`),
  ].join('');
}

const routes = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map(
  ([, path]) => path,
);

// Netlify serves 404.html for unknown URLs
routes.push('/404');

for (const route of routes) {
  const { html, head } = await render(route);

  if (!html.trim()) throw new Error(`Empty render for ${route}`);

  const pageRoute =
    pageRoutes.find((r) => r.path === route) ??
    (route === '/' ? null : pageRoutes.find((r) => r.path === '*'));
  const assets = pageRoute ? pageAssets(pageRoute.file) : '';

  // Page-specific tags from Helmet replace the defaults from index.html
  let page = template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, '')
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1https://slbuildersltd.co.uk${route === '/' ? '/' : route}$2`,
    )
    .replace('</head>', `${assets}${head}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  if (/name="robots"/.test(head)) {
    page = page.replace(/<meta\s+name="robots"[\s\S]*?\/>/, '');
  }

  // Netlify serves /about from about.html
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  const target = join(distDir, file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, page);
  console.log(`prerendered ${route} -> dist/${file}`);
}

rmSync(ssrDir, { recursive: true, force: true });
