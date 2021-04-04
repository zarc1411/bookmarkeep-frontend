import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Input } from '@chakra-ui/input';
import { Center } from '@chakra-ui/layout';
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/modal';
import React, { useState } from 'react';
import bookMarkService from '../../services/bookmarks';
const BookmarkForm = ({ categoryToSearch, setBookmarksArray }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth0();
  const [bookmarkUrl, setBookmarkUrl] = useState('');
  const handleChange = event => {
    setBookmarkUrl(event.target.value);
  };

  const saveBookmarkToDatabase = () => {
    bookMarkService
      .getLinkPreview(bookmarkUrl)
      .then(response => {
        const bookmarkObject = {
          title: response.data.title,
          url: response.data.url,
          image: response.data.image,
        };
        return bookMarkService.addBookmark(
          user.nickname,
          categoryToSearch,
          bookmarkObject
        );
      })
      .then(response => {
        // categoryObject.bookmarks = response.data;
        setBookmarksArray(response.data);
      })
      .catch(error => console.log(error));

    onClose();
  };
  return (
    <>
      <Button
        alignSelf="center"
        width={['50%', '40%', '30%', '20%']}
        onClick={onOpen}
        fontSize={50}
      >
        +
      </Button>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf="center">Paste link</ModalHeader>
          <ModalCloseButton />
          <Input
            value={bookmarkUrl}
            onChange={handleChange}
            width="80%"
            alignSelf="center"
          />{' '}
          <Center>
            <ModalFooter>
              <Button onClick={saveBookmarkToDatabase}>Save</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookmarkForm;
