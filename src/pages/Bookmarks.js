import React from 'react';
import { useRouteMatch } from 'react-router';

const Bookmarks = ({ categoryArray }) => {
  console.log(categoryArray);
  const { url } = useRouteMatch();
  const categoryToSearch = url.split('/')[2];
  const categoryObject = categoryArray.find(
    currentCategory => currentCategory.category === categoryToSearch
  );
  return <></>;
};

export default Bookmarks;
