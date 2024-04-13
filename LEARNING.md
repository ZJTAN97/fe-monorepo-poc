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


---

# NX

## Good References

- https://nx.dev/concepts/more-concepts/applications-and-libraries