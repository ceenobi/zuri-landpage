import React from 'react';
import { Box, Flex, Heading, VStack, Text, Button, Stack } from '@chakra-ui/react';
import ZuriService from '../components/ZuriService';

export default function Home() {
  const hoverStyleA = {
    _hover: {
      color: '#E7332B',
      border: '1px',
      borderColor: '1px solid #E7332B',
      bg: 'white',
    },
  };
  const hoverStyleB = {
    _hover: {
      bg: '#E7332B',
      color: 'white',
    },
  };
  return (
    <>
      <Box
        py={16}
        w="100%"
        bgImage="url('https://res.cloudinary.com/ceenobi/image/upload/v1659779596/samples/zuri/hero-bg_nfp4va.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        h="800px"
        px={4}
        mx="auto"
        color="#514949"
      >
        <Flex
          justify="center"
          align="center"
          maxW="container.lg"
          mx="auto"
          mt={{ base: '3rem', md: 'null' }}
        >
          <Heading as="h2" size={{ base: 'md', md: 'lg' }}>
            Zuri
            <Box as="span" color="#e9463f">
              .
            </Box>
            Team
          </Heading>
        </Flex>
        <VStack spacing={8} mt={16} maxW="container.sm" mx="auto">
          <Heading as="h2" size={{ base: 'lg', md: 'lg' }}>
            Learn, Build, Grow.
          </Heading>
          <Text fontSize={{ base: 'md', md: 'md' }} textAlign="center">
            Unlock your Brilliance with our hands-on{' '}
            <Box as="span" color="#e9463f">
              beginner
            </Box>{' '}
            and{' '}
            <Box as="span" color="#e9463f">
              expert training
            </Box>
            . Zuri Team has been immensely successful in creating a global
            network of a highly adept intelligent workforce that can help your
            company achieve their mission-critical{' '}
            <Box as="span" color="#e9463f">
              projects and goals
            </Box>
          </Text>
        </VStack>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={8}
          mt="7rem"
          //maxW={{ base: 'full', md: 'container.sm' }}
          justify="center"
          mx="auto"
          w="full"
        >
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align='center'>
            <Button
              w="224.95px"
              h="48px"
              py="11px"
              px="28px"
              bg="#E7332B"
              color="white"
              rounded="none"
              sx={hoverStyleA}
              // mx={{ base: 'auto', lg: '0' }}
            >
              I'm new to the Industry
            </Button>
            <Button
              w="250.9px"
              h="48px"
              py="11px"
              px="28px"
              color="#E7332B"
              variant="outline"
              borderColor="1px solid #E7332B"
              rounded="none"
              sx={hoverStyleB}
              // mx={{ base: 'auto', lg: '0' }}
            >
              I need industry experience
            </Button>
          </Stack>
        </Flex>
      </Box>
      <ZuriService />
    </>
  );
}
