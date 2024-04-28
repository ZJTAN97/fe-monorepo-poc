import { GraphPage } from '@fe-monorepo-poc/store';
import { Loader } from '@mantine/core';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

export const Route = createLazyFileRoute('/(ces)/profiles/graph')({
  component: () => (
    <Suspense fallback={<Loader />}>
      <GraphPage />
    </Suspense>
  ),
});
