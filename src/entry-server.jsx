// import React from 'react';
// import { renderToReadableStream } from 'react-dom/server';
// import App from './App';

// export async function render() {
//   return renderToReadableStream(<App />);
// }

// src/entry-server.jsx or .tsx (depending on your setup)
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { renderToReadableStream } from 'react-dom/server';
import App from './App';

/**
 * Server-side render function
 * @param {string} url - Incoming request URL
 * @returns {Promise<{ stream: ReadableStream, title: string, description: string }>}
 */
export async function render(url) {
  // Set dynamic metadata based on route
  let title = 'My App';
  let description = 'Default description';

  if (url === '/about') {
    title = 'About Us';
    description = 'Learn more about us.';
  } else if (url === '/contact') {
    title = 'Contact';
    description = 'Reach out to us.';
  }

  const stream = await renderToReadableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  return { stream, title, description };
}
