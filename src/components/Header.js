import React from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import AuthenticationButton from '../components/auth/AuthenticationButton';
const Header = () => {
  return (
    <Flex marginTop={5} mx={['10%', '13%', '16%', '20%']}>
      <Box fontFamily="Josefin Sans" fontSize="1.5em" textAlign="center">
        <Link to="/">Bookmarkeep</Link>
      </Box>
      <Spacer />
      <AuthenticationButton />
    </Flex>
  );
};

export default Header;
