import { Stack, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';

export const WorkspacesPage = () => {
  return (
    <Stack>
      <Link to="/">Back to home</Link>
      <Text>Workspaces page</Text>
    </Stack>
  );
};
