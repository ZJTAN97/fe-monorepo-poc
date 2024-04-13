import { Stack, Text } from '@mantine/core';
import { Link, useSearch } from '@tanstack/react-router';

export const SearchResultsPage = () => {
  const { filter, type } = useSearch({ from: '/search/results' });

  return (
    <Stack>
      <Link to="/">Back to home</Link>
      <Text>Current type param: {type}</Text>
      <Text>Current filter param: {filter}</Text>
    </Stack>
  );
};
