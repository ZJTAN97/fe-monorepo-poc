import fs from 'fs';
import express from 'express';
import { createServer } from 'vite';

const app = express();

/**
 * This creates a Vite development server
 * Additional config is required so Vite knows how to hand control over to express
 */
const vite = await createServer({
  server: {
    middlewareMode: true,
  },
  appType: 'custom',
});

/**
 * This ensures any requests to express get passed back voer to the Vite Dev Server
 */
app.use(vite.middlewares);

/**
 * Express application deals with all the incoming requests
 * URL from each reqeust can be extracted from the request object 
 * and is required by Vite when transforming index.html
 */
app.use('*', async (req, res) => {
  const url = req.originalUrl;

  try {
    const template = await vite.transformIndexHtml(
      url,
      fs.readFileSync('index.html', 'utf-8')
    );

    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

    const html = template.replace(`<!--outlet-->`, render);

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    res.status(500).end(error);
  }
});

app.listen(4173, () => {
  console.log('Server started at http://localhost:4173');
});
