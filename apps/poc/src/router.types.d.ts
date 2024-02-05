import type { FERouterType } from './router';

declare module '@tanstack/react-router' {
  interface Register {
    router: FERouterType;
  }
}
