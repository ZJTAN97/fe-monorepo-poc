import { FERootRoute } from '@fe-monorepo-poc/fe-base';
import { Button, Flex, Stack } from '@mantine/core';
import { Link, createRoute, useNavigate } from '@tanstack/react-router';

export const CreateProfilePageRoute = createRoute({
  getParentRoute: () => FERootRoute,
  path: 'profiles/new',
  component: () => <CreateProfilePage />,
});

const CreateProfilePage = () => {
  const navigate = useNavigate();
  const randomProfileId = '12312asdasdasg';
  return (
    <Stack>
      <Link to="/">Back to home</Link>
      <Flex>
        <Button
          onClick={() =>
            navigate({
              to: '/profiles/$profileId',
              params: { profileId: randomProfileId },
            })
          }
        >
          Navigate Programatically
        </Button>
      </Flex>
    </Stack>
  );
};
