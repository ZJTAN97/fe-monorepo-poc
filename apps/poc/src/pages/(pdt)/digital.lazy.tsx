import { createFileRoute } from '@tanstack/react-router';
import { DigitalPage } from '@fe-monorepo-poc/digital';
import { Suspense } from 'react';
import { Loader } from '@mantine/core';

export const Route = createFileRoute('/(pdt)/digital')({
  component: () => (
    <Suspense fallback={<Loader />}>
      <DigitalPage />
    </Suspense>
  ),
});
