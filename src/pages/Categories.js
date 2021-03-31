import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/button';
import { Box, Input, Stack, SimpleGrid } from '@chakra-ui/react';
import bookMarkService from '../services/bookmarks';
import axios from 'axios';
const Categories = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  if (isAuthenticated) {
    return (
      <Stack
        marginTop={5}
        mx={['10%', '13%', '16%', '20%']}
        templateRows="30px 1fr 30px"
      >
        <Input
          alignSelf="center"
          placeholder="Search"
          width={['50%', '40%', '30%', '20%']}
        />
        <Box height="60vh" overflowY="scroll">
          <SimpleGrid columns={[1, null, 2, 3]} gap={10} padding="2vh">
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>

            <Box bg="tomato" height="80px"></Box>

            <Box bg="tomato" height="80px"></Box>
          </SimpleGrid>
        </Box>

        <Button alignSelf="center" width={['50%', '40%', '30%', '20%']}>
          Add new category
        </Button>
      </Stack>
    );
  } else return <p>You are not authorised to view this page</p>;
};

export default Categories;
