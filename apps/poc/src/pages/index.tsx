import { Button, Stack } from '@mantine/core';
import { Link, createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <SearchLandingPage />,
});

export const SearchLandingPage = () => {
  const navigate = useNavigate();

  return (
    <Stack w="30%" align="center" justify="center">
      <Link to="/profiles">Profiles</Link>
      <Button onClick={() => navigate({ to: '/search' })}>
        Go to search result page
      </Button>
    </Stack>
  );
};
