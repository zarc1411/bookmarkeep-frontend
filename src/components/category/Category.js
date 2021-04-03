import React from 'react';
import { IconButton, SimpleGrid, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import DeleteIcon from '../DeleteIcon';
import bookMarkService from '../../services/bookmarks';
const Category = ({ username, category, setCategoryArray }) => {
  console.log(username);
  const deleteCategoryFromDatabase = () => {
    bookMarkService.deleteCategory(username, category).then(response => {
      setCategoryArray(response.data);
    });
  };
  const colorRandomizer = () => {
    const colors = [
      '#ff87ab',
      '#db91ff',
      '#ade8f4',
      '#44EB9F',
      '#e66063',
      '#c37df8',
      '#ffb179',
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <SimpleGrid
      backgroundColor={colorRandomizer()}
      height="15vh"
      templateRows="1fr 3fr"
    >
      <IconButton
        icon={<DeleteIcon />}
        background="none"
        justifySelf="end"
        size="md"
        onClick={deleteCategoryFromDatabase}
      />
      <Link to={`/${username}/${category}/bookmarks`}>
        <Text textAlign="center" paddingTop={[2, 4]}>
          {' '}
          {category}
        </Text>
      </Link>
    </SimpleGrid>
  );
};

export default Category;
