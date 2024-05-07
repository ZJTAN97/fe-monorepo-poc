import { Button, Center, Stack, Text, TextInput, Title } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';

export const SearchLandingPage = () => {
  const navigate = useNavigate();

  return (
    <Stack h="80vh" align="center" justify="center" gap='xl'>
      <Title c='gray.7'>The Stress Company</Title>
      <Center>
        <TextInput w="500px" placeholder="Search for anything" />
      </Center>
      <Button onClick={() => navigate({ to: '/search/results' })}>
        Lets go!
      </Button>
    </Stack>
  );
};
