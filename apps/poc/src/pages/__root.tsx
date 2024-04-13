import { AppShell, Button, Flex, Group } from '@mantine/core';
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
        <Group h="100%" px="xl" justify="space-between">
          <Flex gap="md">
            <Button component={Link} to="/">
              Hub
            </Button>
            <Button
              component={Link}
              to="/workspaces/$workspaceId"
              params={{ workspaceId: 'random' }}
            >
              Workspace
            </Button>
          </Flex>
          <Flex>
            <Button component={Link} to="/profiles">
              Profiles
            </Button>
          </Flex>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
