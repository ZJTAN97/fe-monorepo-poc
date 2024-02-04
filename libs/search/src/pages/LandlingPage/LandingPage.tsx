import React from 'react';
import { Button } from '@mantine/core';
import { Link, useNavigate } from '@tanstack/react-router';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Link to="/profile/new">Navigate to profile new programmatically</Link>
      <Button onClick={() => navigate({ to: '/profile/new' })}>
        navigate to profile programmatically
      </Button>
    </div>
  );
};
