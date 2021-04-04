import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Box,
  Input,
  Stack,
  SimpleGrid,
  Skeleton,
  Spacer,
  Flex,
} from '@chakra-ui/react';
import Category from '../components/category/Category';
import CategoryForm from '../components/category/CategoryForm';
const Categories = ({
  categoryArray,
  categoryArrayReceived,
  setCategoryArray,
}) => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const [categorySearchValue, setCategorySearchValue] = useState('');
  const handleChange = event => {
    setCategorySearchValue(event.target.value);
  };
  const categoriesToShow = categoryArray.filter(currentCategory =>
    currentCategory.category
      .toLowerCase()
      .includes(categorySearchValue.toLowerCase())
  );
  if (isAuthenticated) {
    if (categoryArray.length === 0 && !categoryArrayReceived) {
      return (
        <Skeleton mx={['10%', '13%', '16%', '20%']} height="60vh"></Skeleton>
      );
    }
    return (
      <Stack marginTop={5} mx={['10%', '13%', '16%', '20%']}>
        <Flex>
          <Input
            alignSelf="center"
            placeholder="Search"
            width={['50%', '40%', '30%', '20%']}
            value={categorySearchValue}
            onChange={handleChange}
          />
          <Spacer />
          <CategoryForm
            categoryArray={categoryArray}
            setCategoryArray={setCategoryArray}
          />
        </Flex>

        <Box>
          <SimpleGrid columns={[1, null, 2, 3]} gap={10} padding="2vh">
            {categoriesToShow.map(currentCategory => {
              return (
                <Category
                  key={currentCategory._id}
                  username={user.nickname}
                  category={currentCategory.category}
                  setCategoryArray={setCategoryArray}
                ></Category>
              );
            })}
          </SimpleGrid>
        </Box>
      </Stack>
    );
  } else return <p>You are not authorised to view this page</p>;
};

export default Categories;
