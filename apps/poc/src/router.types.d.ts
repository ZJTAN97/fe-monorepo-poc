import { type PocRouter } from './main';

declare module '@tanstack/react-router' {
  interface Register {
    router: PocRouter;
  }
}
