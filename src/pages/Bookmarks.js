import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { Stack, SimpleGrid, Box, Input, Flex, Spacer } from '@chakra-ui/react';
import BookmarkForm from '../components/bookmark/BookmarkForm';
import Bookmark from '../components/bookmark/Bookmark';
import bookMarkService from '../services/bookmarks';
import { useAuth0 } from '@auth0/auth0-react';
const Bookmarks = ({ categoryArray }) => {
  const { url } = useRouteMatch();
  const categoryToSearch = url.split('/')[2];
  const [bookmarksArray, setBookmarksArray] = useState([]);
  const [bookmarkSearch, setBookmarkSearch] = useState('');
  const { user } = useAuth0();
  useEffect(() => {
    bookMarkService
      .getBookmarks(user.nickname, categoryToSearch)
      .then(response => setBookmarksArray(response.data));
  }, []);

  const handleChange = event => {
    setBookmarkSearch(event.target.value);
  };
  console.log('bookmarks ', bookmarksArray);
  console.log(typeof bookmarkSearch);
  const bookmarksToShow = bookmarksArray.filter(currentBookmarkObject =>
    currentBookmarkObject.title
      .toLowerCase()
      .includes(bookmarkSearch.toLowerCase())
  );
  return (
    <>
      {' '}
      <Stack marginTop={5} mx={['10%', '13%', '16%', '20%']}>
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
          <SimpleGrid columns={[1, null, 2, 3]} gap={10} padding="2vh">
            {bookmarksToShow.map(currentBookmark => {
              return (
                <Bookmark
                  key={currentBookmark._id}
                  title={currentBookmark.title}
                  image={currentBookmark.image}
                  url={currentBookmark.url}
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
