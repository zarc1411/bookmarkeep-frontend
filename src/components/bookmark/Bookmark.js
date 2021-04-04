import { SimpleGrid, Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Bookmark = ({ title, image, url }) => {
  return (
    <>
      <SimpleGrid templateRows="4fr 1fr">
        <Box>
          <Image src={image} />
          <Text>{title}</Text>
        </Box>
      </SimpleGrid>
    </>
  );
};
export default Bookmark;
