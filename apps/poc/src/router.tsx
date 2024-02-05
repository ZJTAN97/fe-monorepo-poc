import { createRouter } from '@tanstack/react-router';
import '@mantine/core/styles.css';
import { FERootRoute } from '@fe-monorepo-poc/fe-base';
import {
  CreateProfilePageRoute,
  ProfilePageRoute,
} from '@fe-monorepo-poc/store';
import {
  LandingPageRoute,
  SearchResultsPageRoute,
} from '@fe-monorepo-poc/search';
import {
  WorkspacePageRoute,
  WorkspacesPageRoute,
} from '@fe-monorepo-poc/workspace';

const routeTree = FERootRoute.addChildren([
  CreateProfilePageRoute,
  ProfilePageRoute,
  LandingPageRoute,
  SearchResultsPageRoute,
  WorkspacePageRoute,
  WorkspacesPageRoute,
]);

export const router = createRouter({ routeTree });
export type FERouterType = typeof router;
