import { useAuth0 } from '@auth0/auth0-react';
import { SimpleGrid, Image, Button, Link, Center } from '@chakra-ui/react';
import React from 'react';
import bookMarkService from '../../services/bookmarks';
const Bookmark = ({
  title,
  image,
  url,
  setBookmarksArray,
  categoryToSearch,
}) => {
  const { user } = useAuth0();
  const deleteBookmarkFromDatabase = () => {
    bookMarkService
      .deleteBookmark(user.nickname, categoryToSearch, title)
      .then(response => setBookmarksArray(response.data));
  };
  return (
    <>
      <SimpleGrid placeItems="center" fontFamily="Gudea">
        <SimpleGrid columns={1}>
          <Image src={image} />
          <Center padding={2}>
            <Link href={url} target="_blank">
              {title}
            </Link>
          </Center>
          <Button onClick={deleteBookmarkFromDatabase}>Delete</Button>
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};
export default Bookmark;
