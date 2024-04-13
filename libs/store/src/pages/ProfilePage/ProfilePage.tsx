import { Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';

export const ProfilePage = () => {
  return (
    <div>
      <Link to="/">Back to home page</Link>
      <Text>Profile page</Text>
      <Text>Current profile id </Text>
    </div>
  );
};
