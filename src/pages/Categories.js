import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Input, Stack, SimpleGrid, Skeleton } from '@chakra-ui/react';
import Category from '../components/category/Category';
import CategoryForm from '../components/category/CategoryForm';
const Categories = ({
  categoryArray,
  categoryArrayReceived,
  setCategoryArray,
}) => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  if (isAuthenticated) {
    if (categoryArray.length === 0 && !categoryArrayReceived) {
      return (
        <Skeleton mx={['10%', '13%', '16%', '20%']} height="60vh"></Skeleton>
      );
    }
    return (
      <Stack marginTop={5} mx={['10%', '13%', '16%', '20%']}>
        <Input
          alignSelf="center"
          placeholder="Search"
          width={['50%', '40%', '30%', '20%']}
        />
        <Box height="60vh" overflowY="scroll">
          <SimpleGrid columns={[1, null, 2, 3]} gap={10} padding="2vh">
            {categoryArray.map(currentCategory => {
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
        <CategoryForm
          categoryArray={categoryArray}
          setCategoryArray={setCategoryArray}
        />
      </Stack>
    );
  } else return <p>You are not authorised to view this page</p>;
};

export default Categories;
