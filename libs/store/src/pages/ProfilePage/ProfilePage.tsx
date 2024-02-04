import { Title } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import React from 'react';

export const ProfilePage = () => {
  return (
    <div>
      <Title>Profile page</Title>
      <Link to="/search">Back to home page</Link>
    </div>
  );
};
