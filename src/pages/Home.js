import React from 'react';
import WebDeveloperMonochromatic from '../images/WebDeveloperMonochromatic.svg';
import {
  Image,
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import CategoryButton from '../components/category/CategoryButton';
const Home = () => {
  return (
    <VStack mx={['10%', '13%', '16%', '20%']} overflowY="hidden">
      <SimpleGrid
        marginTop="5em"
        minChildWidth="10em"
        spacing="2em"
        textAlign="center"
        padding={10}
      >
        <Box boxSize="100%">
          <Image src={WebDeveloperMonochromatic}></Image>
        </Box>
        <VStack textAlign="center" py={15} px={2} boxSize="100%">
          <Heading size="2xl" my={[5, 10]} fontFamily="Josefin Sans">
            Read the best articles and watch the best videos.
          </Heading>
          <Text size="2xl" alignSelf="end" fontFamily="Josefin Sans">
            LinksForYou is a clean and organized site that contains links to
            engrossing articles and videos of various topics like Programming,
            Science, Career, Health and much more!
          </Text>
        </VStack>
      </SimpleGrid>
      <CategoryButton />
    </VStack>
  );
};

export default Home;
