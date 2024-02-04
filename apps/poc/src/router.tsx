import {
  Outlet,
  NotFoundRoute,
  createRootRoute,
  createRoute,
  createRouter,
  Link,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import '@mantine/core/styles.css';
import { AppShell, Flex, MantineProvider } from '@mantine/core';
import { ProfilePage, CreateProfilePage } from '@fe-monorepo-poc/store';
import { LandingPage, SearchResultsPage } from '@fe-monorepo-poc/search';

export const rootRoute = createRootRoute({
  notFoundComponent: () => <div>404 not found</div>,
  component: () => (
    <MantineProvider defaultColorScheme="dark">
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <Flex my="md" gap="md" ml="xl">
            <Link to="/">Search</Link>
            <Link to="/workspace">Workspace</Link>
            <Link to="/profiles">Store</Link>
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

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <LandingPage />,
});

const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search',
  component: () => <div>Search for anything</div>,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'profiles',
  component: () => <ProfilePage />,
});

const createProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: `profile/new`,
  component: () => <CreateProfilePage />,
});

const workspaceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'workspace',
  component: () => <div>workspace route</div>,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  searchRoute,
  profileRoute,
  createProfileRoute,
  workspaceRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
