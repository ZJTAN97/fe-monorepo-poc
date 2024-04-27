import { Button, Flex, Stack, Text, Title } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { useRef, useState } from 'react';

export const ProfilePage = () => {
  // The moment you use a ref, it is intentially mutable
  // Can read and write to it
  // Escape hatch from React's one-way data flow
  // Notice refs does not trigger re-renders

  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Note:
  // setInterval --> repeats execution of the function continuously
  const timeInterval = useRef<any>(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);

    timeInterval.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 10);
  };

  const handlePause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(timeInterval.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current);
    setTimer(0);
  };

  return (
    <Stack px="md">
      <Flex>
        <Button component={Link} to="/" variant="light">
          Back to home
        </Button>
      </Flex>

      <Stack mt="lg">
        <Text>Time passed: {timer}</Text>

        <Flex gap="sm">
          <Button variant="light" onClick={handleStart}>
            Start
          </Button>
          <Button variant="light" onClick={handlePause}>
            Stop
          </Button>
          <Button variant="light" onClick={handleReset}>
            Reset
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
};
