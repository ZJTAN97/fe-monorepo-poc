import { FERootRoute } from '@fe-monorepo-poc/fe-base';
import { Stack, Text } from '@mantine/core';
import { Link, createRoute } from '@tanstack/react-router';

export const WorkspacePageRoute = createRoute({
  getParentRoute: () => FERootRoute,
  path: '/workspaces/$workspaceId',
  component: () => <WorkspacePage />,
});

const WorkspacePage = () => {
  const { workspaceId } = WorkspacePageRoute.useParams();

  return (
    <Stack>
      <Link to="/">Back to home</Link>
      <Text>Workspace page</Text>
      <Text>Current workspace id: {workspaceId}</Text>
    </Stack>
  );
};
