import { createFileRoute } from '@tanstack/react-router';
import { SearchLandingPage } from '@fe-monorepo-poc/search';
import { Suspense } from 'react';
import { Loader } from '@mantine/core';

export const Route = createFileRoute('/')({
  component: () => (
    <Suspense fallback={<Loader />}>
      <SearchLandingPage />
    </Suspense>
  ),
});
