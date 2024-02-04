import { Button, Title } from '@mantine/core';
import { Link, useNavigate } from '@tanstack/react-router';
import React from 'react';

export const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Title>Profile page</Title>
      <Link to="/">Back to home page</Link>
      <Button onClick={() => navigate({ to: '/' })}>
        Programmatically back to home page
      </Button>
    </div>
  );
};
