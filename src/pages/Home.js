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
import HomeHeader from '../components/HomeHeader';
const Home = () => {
  return (
    <VStack mx={['10%', '13%', '16%', '20%']} overflowY="hidden">
      <HomeHeader />
      <CategoryButton />
      <SimpleGrid
        marginTop={10}
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
            Bookmark Manager
          </Heading>
          <Text size="2xl" alignSelf="end" fontFamily="Josefin Sans">
            Bookmarkeep is a clean and organized site that helps you organise
            your bookmarks with ease.
          </Text>
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default Home;
