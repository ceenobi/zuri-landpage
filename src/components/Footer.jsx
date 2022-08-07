import React from 'react';
import {
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  Icon,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { ImFacebook2 } from 'react-icons/im';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <Box py="8rem" maxW="container.xl" mx="auto" px={10} mt="7rem">
      <Flex justify="space-between" direction={{ base: 'column', md: 'row' }}>
        <Heading
          as="h2"
          size={{ base: 'xl', md: 'md' }}
          mb={6}
          textAlign="center"
        >
          Zuri
          <Box as="span" color="#e9463f">
            .
          </Box>
          Team
        </Heading>

        <VStack spacing={4} textAlign={{ base: 'center', md: 'start' }} mb={6}>
          <Text fontSize={['xl', 'md']} color="#514949" fontWeight="bold">
            Links
          </Text>
          <VStack
            spacing={3}
            color="#e9463f"
            align={{ base: 'center', md: 'start' }}
          >
            <Text fontSize="md">Store</Text>
            <Text fontSize="md">Blog</Text>
          </VStack>
        </VStack>
        <VStack
          spacing={4}
          boxSize={{ base:'full', md:'200px'}}
          align={{ base: 'center', md: 'start' }}
          mx={['auto', 'auto','0']}
          mb={6}
        >
          <Text fontSize={['xl', 'md']} color="#514949" fontWeight="bold">
            Contact
          </Text>
          <VStack spacing={3} align={{ base: 'center', md: 'start' }}>
            <Text fontSize="sm" textAlign={{ base: 'center', md: 'start' }}>
              8 Jubliee-CMD Road, Magodo, Lagos State
            </Text>
            <Text fontSize="sm" color="#e9463f">
              hello@zuri.team
            </Text>
          </VStack>
        </VStack>
        <VStack spacing={4} align={{ base: 'center', md: 'start' }}>
          <Text fontSize={['xl', 'md']} color="#514949" fontWeight="bold">
            Follow Us
          </Text>
          <HStack spacing={4} align={{ base: 'center', md: 'start' }}>
            <Icon as={ImFacebook2} color="blue.600" boxSize="20px" />
            <Icon as={AiOutlineTwitter} color="blue.400" boxSize="20px" />
            <Icon as={AiOutlineInstagram} color="red.500" boxSize="20px" />
            <Icon as={AiFillLinkedin} color="blue.700" boxSize="20px" />
          </HStack>
        </VStack>
      </Flex>
      <Divider border="1px" variant="solid" mt="3rem" />
      <Flex justify="center" align="center" mt="2rem">
        <Text color="#514949">© 2020 ZURI TEAM</Text>
      </Flex>
    </Box>
  );
}
