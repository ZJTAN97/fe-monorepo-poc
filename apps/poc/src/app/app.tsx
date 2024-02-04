import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Outlet,
  RouterProvider,
  NotFoundRoute,
  createRootRoute,
  createRoute,
  createRouter,
  Link,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import '@mantine/core/styles.css';
import { AppShell, Flex, MantineProvider, Text } from '@mantine/core';
import { ProfilePage, CreateProfilePage } from '@fe-monorepo-poc/store';

export const rootRoute = createRootRoute({
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
  component: () => <div>Search for anything</div>,
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

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => (
    <div>
      <Link to="/">Back to home</Link>
    </div>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  searchRoute,
  profileRoute,
  createProfileRoute,
  workspaceRoute,
]);

const router = createRouter({ routeTree, notFoundRoute });

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
