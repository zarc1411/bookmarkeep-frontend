import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@chakra-ui/layout';
import React from 'react';

const HomeHeader = () => {
  const { isAuthenticated, user } = useAuth0();
  if (isAuthenticated) {
    return (
      <Box fontSize="6vh" fontFamily="Raleway" marginTop={10}>
        Hi {user.given_name}!
      </Box>
    );
  } else return <></>;
};
export default HomeHeader;
