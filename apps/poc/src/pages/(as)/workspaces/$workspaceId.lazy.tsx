import { createFileRoute, useParams } from '@tanstack/react-router';
import React from 'react';

export const Route = createFileRoute('/(as)/workspaces/$workspaceId')({
  component: () => <WorkspacePage />,
});

export const WorkspacePage = () => {
  const { workspaceId } = useParams({ from: '/workspaces/$workspaceId' });

  return <div>WorkspacePage with id: {workspaceId}</div>;
};
