import { AppShell, Group } from '@mantine/core';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <Layout />
      <TanStackRouterDevtools />
    </>
  ),
});

export const Layout = () => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" gap="md">
          <Link to="/">Hub</Link>
          <Link
            to="/workspaces/$workspaceId"
            params={{ workspaceId: 'random' }}
          >
            Workspaces
          </Link>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
