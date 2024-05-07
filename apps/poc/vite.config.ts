/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/poc',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths(), visualizer()],

  // This force optimize listen dependencies
  // Must be resolvable import paths, cannot be globs
  optimizeDeps: {
    include: [
      '@fe-monorepo-poc/digital',
      '@fe-monorepo-poc/store',
      '@fe-monorepo-poc/search',
    ],
    force: true, // on dev server start, do a force bundle
  },

  build: {
    outDir: '../../dist/apps/poc',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          mantine: ['@mantine/core'],
          router: ['@tanstack/react-router'],
          zod: ['zod'],
        },
      },
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/poc',
      provider: 'v8',
    },
  },
});
