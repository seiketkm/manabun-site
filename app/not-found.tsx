'use client';

import { useEffect } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

export const metadata = {
  title: '404 Not Found'
};

export default function NotFound() {
  useEffect(() => {
    window.location.href = '/';
  }, []);

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="grey.100" padding={12} rounded={6}>
        <Heading mb={6}>404 Not Found</Heading>
      </Flex>
    </Flex>
  );
}
