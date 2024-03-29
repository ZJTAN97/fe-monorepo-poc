import { FERootRoute } from '@fe-monorepo-poc/fe-base';
import { Stack, Text } from '@mantine/core';
import { Link, createRoute } from '@tanstack/react-router';

export const SearchResultsPageRoute = createRoute({
  getParentRoute: () => FERootRoute,
  path: 'search-results/$searchId',
  component: () => <SearchResultsPage />,
});

const SearchResultsPage = () => {
  const { searchId } = SearchResultsPageRoute.useParams();

  return (
    <Stack>
      <Link to="/">Back to home</Link>
      <Text>Current search id: {searchId}</Text>
    </Stack>
  );
};
