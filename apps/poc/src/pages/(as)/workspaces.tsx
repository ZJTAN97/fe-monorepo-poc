import { Stack } from '@mantine/core';
import { Link, Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(as)/workspaces')({
  component: () => (
    <Stack>
      <Link to="/workspaces/$workspaceId" params={{ workspaceId: '1' }}>
        Workspace 1
      </Link>
      <Link to="/workspaces/$workspaceId" params={{ workspaceId: '2' }}>
        Workspace 2
      </Link>
      <Link to="/workspaces/$workspaceId" params={{ workspaceId: '3' }}>
        Workspace 3
      </Link>
      <Outlet />
    </Stack>
  ),
});
