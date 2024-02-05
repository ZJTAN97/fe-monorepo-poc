import { FERootRoute } from '@fe-monorepo-poc/fe-base';
import { Stack, Text } from '@mantine/core';
import { Link, createRoute } from '@tanstack/react-router';

export const WorkspacesPageRoute = createRoute({
  getParentRoute: () => FERootRoute,
  path: '/workspaces',
  component: () => <WorkspacesPage />,
});

const WorkspacesPage = () => {
  return (
    <Stack>
      <Link to="/">Back to home</Link>
      <Text>Workspaces page</Text>
    </Stack>
  );
};
