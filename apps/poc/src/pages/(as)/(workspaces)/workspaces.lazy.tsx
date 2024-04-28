import { createFileRoute } from '@tanstack/react-router';
import { WorkspacesPage } from '@fe-monorepo-poc/workspace';
import { Suspense } from 'react';
import { Loader } from '@mantine/core';

export const Route = createFileRoute('/(as)/(workspaces)/workspaces')({
  component: () => (
    <Suspense fallback={<Loader />}>
      <WorkspacesPage />
    </Suspense>
  ),
});
