import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import {
  Stack,
  SimpleGrid,
  Box,
  Input,
  Flex,
  Spacer,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import BookmarkForm from '../components/bookmark/BookmarkForm';
import Bookmark from '../components/bookmark/Bookmark';
import bookMarkService from '../services/bookmarks';
import { useAuth0 } from '@auth0/auth0-react';
const Bookmarks = ({ categoryArray }) => {
  const { url } = useRouteMatch();
  const categoryToSearch = url.split('/')[2];
  const [bookmarksArray, setBookmarksArray] = useState([]);
  const [bookmarkSearch, setBookmarkSearch] = useState('');
  const [bookmarkArrayReceived, setBookmarkArrayReceived] = useState(false);
  const { user } = useAuth0();
  useEffect(() => {
    bookMarkService
      .getBookmarks(user.nickname, categoryToSearch)
      .then(response => {
        setBookmarksArray(response.data);
        setBookmarkArrayReceived(true);
      });
  }, []);

  const handleChange = event => {
    setBookmarkSearch(event.target.value);
  };
  const bookmarksToShow = bookmarksArray.filter(currentBookmarkObject =>
    currentBookmarkObject.title
      .toLowerCase()
      .includes(bookmarkSearch.toLowerCase())
  );

  if (!bookmarkArrayReceived) {
    return (
      <Skeleton mx={['10%', '13%', '16%', '20%']} height="60vh"></Skeleton>
    );
  }
  return (
    <>
      {' '}
      <Stack marginTop={5} mx={['10%', '13%', '16%', '20%']}>
        <Text fontFamily="Raleway" fontSize="3vh" textAlign="center">
          {categoryToSearch}
        </Text>
        <Flex>
          <Input
            alignSelf="center"
            placeholder="Search"
            width={['50%', '40%', '30%', '20%']}
            value={bookmarkSearch}
            onChange={handleChange}
          />
          <Spacer />
          <BookmarkForm
            categoryToSearch={categoryToSearch}
            bookmarksArray={bookmarksArray}
            setBookmarksArray={setBookmarksArray}
          />
        </Flex>

        <Box>
          <SimpleGrid columns={[1, null, 2, 3]} gap={10}>
            {bookmarksToShow.map(currentBookmark => {
              console.log(currentBookmark.title);
              return (
                <Bookmark
                  key={currentBookmark._id}
                  title={currentBookmark.title}
                  image={currentBookmark.image}
                  url={currentBookmark.url}
                  setBookmarksArray={setBookmarksArray}
                  categoryToSearch={categoryToSearch}
                />
              );
            })}
          </SimpleGrid>
        </Box>
      </Stack>
    </>
  );
};

export default Bookmarks;
