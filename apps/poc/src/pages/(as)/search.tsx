import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(as)/search')({
  component: () => <div>Search results</div>,
});
  