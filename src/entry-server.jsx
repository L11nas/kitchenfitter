import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export { pageRoutes } from './routes';

// Waits for lazy pages to load, so the HTML always contains the full page
export async function render(url) {
  const helmetContext = {};

  const { prelude } = await prerenderToNodeStream(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>,
  );

  let html = '';
  for await (const chunk of prelude) html += chunk;

  const { helmet } = helmetContext;
  const head = helmet
    ? [helmet.title, helmet.meta, helmet.link, helmet.script]
        .map((tag) => tag.toString())
        .join('')
    : '';

  return { html, head };
}
