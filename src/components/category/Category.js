import React from 'react';
import { Center, IconButton, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DeleteIcon from '../DeleteIcon';
import bookMarkService from '../../services/bookmarks';
const Category = ({ username, category, setCategoryArray }) => {
  const deleteCategoryFromDatabase = () => {
    bookMarkService.deleteCategory(username, category).then(response => {
      setCategoryArray(response.data);
    });
  };
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 500 }}
    >
      <SimpleGrid
        color="#c37df8"
        height="15vh"
        templateRows="1fr 1fr 1fr"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        fontFamily="Raleway"
        fontSize="2vh"
      >
        <IconButton
          icon={<DeleteIcon />}
          background="none"
          justifySelf="end"
          size="md"
          onClick={deleteCategoryFromDatabase}
        />
        <Link to={`/${username}/${category}/bookmarks`}>
          <Text textAlign="center" alignSelf="center" paddingTop={[2, 4]}>
            {' '}
            {category}
          </Text>
        </Link>
        <Spacer />
      </SimpleGrid>
    </motion.div>
  );
};

export default Category;
