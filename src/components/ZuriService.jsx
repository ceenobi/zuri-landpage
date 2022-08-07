import React from 'react';
import { Box, Text, Heading, Flex, Image, Icon } from '@chakra-ui/react';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function ZuriService() {
  return (
    <Box py={5}>
      <Flex
        justify="center"
        align="center"
        maxW="container.sm"
        mx="auto"
        mt={['3rem', '7rem']}
        mb={3}
        color="#514949"
      >
        <Text fontSize="sm" color="#e9463f">
          BY ZURI Team
        </Text>
      </Flex>
      <Flex justify="center" align="center" maxW="363px" mx="auto">
        {' '}
        <Text
          fontSize={{ base: '1.5rem', md: '1.5rem' }}
          textAlign="center"
          color="#514949"
        >
          We cater for every level of expertise and needs in the industry.
        </Text>
      </Flex>
      <Flex justify="space-between" mt={3} pos="relative">
        <Box w="400px" h="500px" display={{ base: 'none', lg: 'flex' }}>
          <Image
            src="https://res.cloudinary.com/ceenobi/image/upload/v1659785093/samples/zuri/left_bvmv7q_rzvghc.png"
            alt="bgimage"
          />
        </Box>
        <Box w="400px" h="500px" display={{ base: 'none', lg: 'flex' }}>
          <Image
            src="https://res.cloudinary.com/ceenobi/image/upload/v1659785128/samples/zuri/right_yz6hn3_x3hely.png"
            alt="bgimage"
          />
        </Box>
        <Flex
          justify="space-evenly"
          flexWrap="wrap"
          maxW="container.xl"
          //direction={{ base: 'column', lg: 'row' }}
          mx="auto"
          pos={{ base: 'none', lg: 'absolute' }}
          top={{ base: 'none', lg: '20%' }}
          left={{ base: 'none', lg: '3%', xl:'3%', '2xl': '7%'}}
          gap={4}
        >
          <Box
            w={{ base: 'full', md: '280px', lg: '265px', xl: '350px' }}
            h="550px"
            bg="#fffafa"
            mx={6}
          >
            <Flex
              bg="white"
              justify="center"
              align="center"
              boxSize="150px"
              mt="3rem"
              mx={6}
            >
              <Heading as="h2" size="sm">
                Zuri
                <Box as="span" color="#e9463f">
                  .
                </Box>
                Training
              </Heading>
            </Flex>
            <Text fontSize="md" px={6} mt="2rem">
              We understand a complete beginner cannot become a professional
              after a few weeks, the aim here is to get you familiar enough with
              each the tools such that you’ll be able to continue learning on
              your own with minimal support.
            </Text>
            <Flex
              gap={1}
              color="#e9463f"
              mx={6}
              w="full"
              mt="2rem"
              align="center"
            >
              <Text fontSize="md">I want to be trained</Text>
              <Icon as={MdKeyboardArrowRight} />
            </Flex>
          </Box>
          <Box
            w={{ base: 'full', md: '280px', lg: '265px', xl: '350px' }}
            h="550px"
            bg="#fffafa"
            mx={6}
          >
            <Flex
              bg="white"
              justify="center"
              align="center"
              boxSize="150px"
              mt="3rem"
              mx={6}
            >
              <Heading as="h2" size="sm">
                Zuri
                <Box as="span" color="#e9463f">
                  .
                </Box>
                Internship
              </Heading>
            </Flex>
            <Text fontSize="md" px={6} mt="2rem">
              We place you in a work simulation. We give you tasks every week,
              the tasks ranges from easy to hard as you progress from stage to
              stage, making it to the final stage means you are ready for actual
              work.
            </Text>
            <Flex
              gap={1}
              color="#e9463f"
              mx={6}
              w="full"
              mt="2rem"
              align="center"
            >
              <Text fontSize="md">I want to join the internship</Text>
              <Icon as={MdKeyboardArrowRight} />
            </Flex>
          </Box>
          <Box
            w={{ base: 'full', md: '280px', lg: '265px', xl: '350px' }}
            h="550px"
            bg="#fffafa"
            mx={6}
          >
            <Flex
              bg="white"
              justify="center"
              align="center"
              boxSize="150px"
              mt="3rem"
              mx={6}
            >
              <Heading as="h2" size="sm">
                Zuri
                <Box as="span" color="#e9463f">
                  .
                </Box>
                Talent
              </Heading>
            </Flex>
            <Text fontSize="md" px={6}  mt="2rem">
              Keeping pace with projects and being on the look out for the
              extremely talented individuals has become ever more challenging.
              Here is where Zuri Team comes into play to bring the best suited
              talent for your company
            </Text>
            <Flex
              gap={1}
              color="#e9463f"
              mx={6}
              w="full"
              mt="2rem"
              align="center"
            >
              <Text fontSize="md">I am looking for talent</Text>
              <Icon as={MdKeyboardArrowRight} />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
