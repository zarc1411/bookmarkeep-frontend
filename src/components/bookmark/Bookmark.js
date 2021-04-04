import { useAuth0 } from '@auth0/auth0-react';
import { SimpleGrid, Box, Image, Text, Button, Link } from '@chakra-ui/react';
import React from 'react';
import bookMarkService from '../../services/bookmarks';
const Bookmark = ({
  title,
  image,
  url,
  bookmarksArray,
  setBookmarksArray,
  categoryToSearch,
}) => {
  const { user } = useAuth0();
  const deleteBookmarkFromDatabase = () => {
    console.log(title);
    bookMarkService
      .deleteBookmark(user.nickname, categoryToSearch, title)
      .then(response => setBookmarksArray(response.data));
  };
  return (
    <>
      <SimpleGrid placeItems="center">
        <SimpleGrid columns={1}>
          <Image src={image} />
          <Link href={url} target="_blank">
            {title}
          </Link>
          <Button onClick={deleteBookmarkFromDatabase}>Delete</Button>
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};
export default Bookmark;
