# NX

## Good References

- https://nx.dev/concepts/more-concepts/applications-and-libraries

## Affected Projects

```
pnpm nx affected:dep-graph --base=<branch name>

pnpm nx affected:build --base=<branch name>

```

## Package-Based Repos

- Will have individual `package.json`


## Automatic Updating Dependencies

https://nx.dev/features/automate-updating-dependencies


The nx migrate command helps by automating the process of updating:
- package versions in your package.json
- configuration files (e.g. your Jest, ESLint or Nx config)
- your source code (e.g. fixing breaking changes or migrating to new best practices)


```
pnpm nx migrate latest
```

This updates the `package.json` file and generates `migrations.json` stating what has been changed in detail