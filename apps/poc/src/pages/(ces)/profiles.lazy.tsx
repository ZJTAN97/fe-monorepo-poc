import { createFileRoute } from '@tanstack/react-router';
import { ProfilePage } from '@fe-monorepo-poc/store';
import { Suspense } from 'react';
import { Loader } from '@mantine/core';

export const Route = createFileRoute('/(ces)/profiles')({
  component: () => (
    <Suspense fallback={<Loader m="lg" />}>
      <ProfilePage />
    </Suspense>
  ),
});
