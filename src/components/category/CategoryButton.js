import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
const CategoryButton = () => {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 500 }}
      >
        <Link to={`/categories`}>
          <Button
            bgColor="purple.500"
            color="white"
            fontSize="1.5em"
            padding={7}
            marginTop={5}
            fontFamily="Josefin Sans"
            _hover={{
              backgroundColor: 'purple.500',
            }}
          >
            Get Started
          </Button>
        </Link>
      </motion.div>
    );
  } else {
    return <></>;
  }
};

export default CategoryButton;
