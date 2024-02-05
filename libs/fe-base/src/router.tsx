import { Outlet, createRootRoute, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import '@mantine/core/styles.css';
import { AppShell, Flex, MantineProvider } from '@mantine/core';

export const FERootRoute = createRootRoute({
  notFoundComponent: () => <div>404 not found</div>,
  component: () => (
    <MantineProvider defaultColorScheme="dark">
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <Flex my="md" gap="md" ml="xl">
            <Link to="/">Search</Link>
            <Link to="/workspaces">Workspaces</Link>
            <Link to="/profiles/new">Store</Link>
          </Flex>
        </AppShell.Header>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
      <TanStackRouterDevtools />
    </MantineProvider>
  ),
});
