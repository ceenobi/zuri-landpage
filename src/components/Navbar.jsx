import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box py={16}>
      <Flex justify="center" align="center" maxW="container.sm" mx="auto">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }}>
          Zuri
          <Box as="span" color="red.400">
            .
          </Box>
          Team
        </Heading>
      </Flex>
    </Box>
  );
}
