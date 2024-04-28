import { lazy } from 'react';

export const WorkspacesPage = lazy(() =>
  import('./pages/WorkspacesPage').then((module) => ({
    default: module.WorkspacesPage,
  }))
);

export const WorkspacsPage = lazy(() =>
  import('./pages/WorkspacePage').then((module) => ({
    default: module.WorkspacePage,
  }))
);
