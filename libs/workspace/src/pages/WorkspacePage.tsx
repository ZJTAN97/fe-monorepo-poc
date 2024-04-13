import { Stack, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';

export const WorkspacePage = () => {
  return (
    <Stack>
      <Link to="/">Back to home</Link>
      <Text>Workspace page</Text>
      <Text>Current workspace id</Text>
    </Stack>
  );
};
