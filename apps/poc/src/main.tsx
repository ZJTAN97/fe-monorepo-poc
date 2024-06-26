import ReactDOM from 'react-dom/client';
import React from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const router = createRouter({ routeTree });
export type PocRouter = typeof router;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
