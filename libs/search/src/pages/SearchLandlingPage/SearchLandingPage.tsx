import { Button, Center, Stack, TextInput } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';

export const SearchLandingPage = () => {
  const navigate = useNavigate();

  return (
    <Stack h="80vh" align="center" justify="center">
      <Center>
        <TextInput w="500px" placeholder="Search for anything" />
      </Center>
      <Button onClick={() => navigate({ to: '/search/results' })}>
        Lets go!
      </Button>
    </Stack>
  );
};
