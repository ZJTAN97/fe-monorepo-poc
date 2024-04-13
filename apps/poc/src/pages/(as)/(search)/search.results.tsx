import { createFileRoute } from '@tanstack/react-router';
import { SearchResultsPage } from '@fe-monorepo-poc/search';
import { z } from 'zod';
import { Suspense } from 'react';
import { Loader } from '@mantine/core';

export const Route = createFileRoute('/(as)/(search)/search/results')({
  component: () => (
    <Suspense fallback={<Loader />}>
      <SearchResultsPage />
    </Suspense>
  ),
  validateSearch: z.object({
    filter: z.string().optional(),
    type: z.string().optional(),
  }),
});
