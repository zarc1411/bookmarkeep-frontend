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

const CategoryForm = ({ categoryArray, setCategoryArray }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth0();
  const [categoryName, setCategoryName] = useState('');
  const handleChange = event => {
    setCategoryName(event.target.value);
  };
  const saveCategoryToDatabase = () => {
    bookMarkService.addCategory(user.nickname, categoryName).then(response => {
      setCategoryArray(response.data);
    });
    setCategoryName('');
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
          <ModalHeader alignSelf="center">Enter category name</ModalHeader>
          <ModalCloseButton />
          <Input
            value={categoryName}
            onChange={handleChange}
            width="80%"
            alignSelf="center"
          />{' '}
          <Center>
            <ModalFooter>
              <Button onClick={saveCategoryToDatabase}>Save</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CategoryForm;
