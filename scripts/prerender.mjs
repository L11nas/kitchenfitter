// Renders every page listed in public/sitemap.xml to static HTML after `vite build`,
// so search engines get each page's title, meta tags and content without running JavaScript.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const { render } = await import(
  pathToFileURL(join(ssrDir, 'entry-server.js')).href
);

const template = readFileSync(join(distDir, 'index.html'), 'utf-8');
const sitemap = readFileSync(join(root, 'public', 'sitemap.xml'), 'utf-8');

const routes = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map(
  ([, path]) => path,
);

// Netlify serves 404.html for unknown URLs
routes.push('/404');

for (const route of routes) {
  const { html, head } = render(route);

  if (!html.trim()) throw new Error(`Empty render for ${route}`);

  // Page-specific tags from Helmet replace the defaults from index.html
  let page = template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, '')
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1https://slbuildersltd.co.uk${route === '/' ? '/' : route}$2`,
    )
    .replace('</head>', `${head}</head>`)
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
