import { FERootRoute } from '@fe-monorepo-poc/fe-base';
import { Text } from '@mantine/core';
import { Link, createRoute } from '@tanstack/react-router';

export const ProfilePageRoute = createRoute({
  getParentRoute: () => FERootRoute,
  path: 'profiles/$profileId',
  component: () => <ProfilePage />,
});

const ProfilePage = () => {
  const { profileId } = ProfilePageRoute.useParams();

  return (
    <div>
      <Link to="/">Back to home page</Link>
      <Text>Profile page</Text>
      <Text>Current profile id {profileId}</Text>
    </div>
  );
};
