import { useAuth0 } from '@auth0/auth0-react';
import { SimpleGrid, Image, Button, Link, Center, Drawer, useDisclosure, DrawerOverlay, DrawerContent, DrawerBody } from '@chakra-ui/react';
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
  const {isOpen , onOpen, onClose} = useDisclosure();
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
          <SimpleGrid columns={2}>          
            <Button onClick={onOpen}>View</Button>
            <Button onClick={deleteBookmarkFromDatabase}>Delete</Button>
          </SimpleGrid>
        </SimpleGrid>
      </SimpleGrid>

      <Drawer onClose={onClose} isOpen={isOpen} size="xl">
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerBody>
            <iframe src={url} width="100%" height="100%"></iframe>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Bookmark;
