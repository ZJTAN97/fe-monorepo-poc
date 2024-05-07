# Vite

## `optimizeDeps`

When used as such

```
  optimizeDeps: {
    include: [
      '@fe-monorepo-poc/digital',
      '@fe-monorepo-poc/store',
      '@fe-monorepo-poc/search',
    ],
    force: true
  },

```

The following library modules will be disked cache, vite will used the prebundled and will not watch for changes.

By setting `force` to true, it will only reload when the dev server restarts.

## build.rollupOptions

Manual chunking of react, react-dom

```
 build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },

```

---

# NX

## Good References

- https://nx.dev/concepts/more-concepts/applications-and-libraries

## Affected Projects

```
pnpm nx affected:dep-graph --base=<branch name>

pnpm nx affected:build --base=<branch name>

```

---

# Rollup

## Chunking to improve peformance

- Optimize by chunking (to be updated)

---

# NX 

## Package-Based Repos

- Will have individual `package.json`