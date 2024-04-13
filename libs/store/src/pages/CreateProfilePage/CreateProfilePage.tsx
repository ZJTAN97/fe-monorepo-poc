import { Button, Flex, Stack } from '@mantine/core';
import { Link } from '@tanstack/react-router';

export const CreateProfilePage = () => {
  return (
    <Stack>
      <Link to="/">Back to home</Link>
      <Flex>
        <Button>Navigate Programatically</Button>
      </Flex>
    </Stack>
  );
};
