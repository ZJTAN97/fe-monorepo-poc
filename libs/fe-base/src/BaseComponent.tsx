import { Button } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';
import React from 'react';

/**
 * Place Holder component
 */
export const BaseComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate({ to: '/search' })}>Click me</Button>
    </div>
  );
};
