import { Button, Flex, Stack, Text } from '@mantine/core';
import { Link, createRoute, useNavigate } from '@tanstack/react-router';
import { FERootRoute } from '@fe-monorepo-poc/fe-base';

export const LandingPageRoute = createRoute({
  getParentRoute: () => FERootRoute,
  path: '/',
  component: () => <LandingPage />,
});

const LandingPage = () => {
  const navigate = useNavigate();
  const searchId = 'randomsearchid';

  return (
    <Stack>
      <Link to="/">Back to home</Link>
      <Text>Landing page for search</Text>
      <Flex>
        <Button
          onClick={() =>
            navigate({ to: '/search-results/$searchId', params: { searchId } })
          }
          variant="light"
        >
          Navigate to search results
        </Button>
      </Flex>
    </Stack>
  );
};
