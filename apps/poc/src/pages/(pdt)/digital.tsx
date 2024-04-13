import { createFileRoute } from '@tanstack/react-router';
import { DigitalPage } from '@fe-monorepo-poc/digital';

export const Route = createFileRoute('/(pdt)/digital')({
  component: () => <DigitalPage />,
});
