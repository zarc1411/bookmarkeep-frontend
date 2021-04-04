import React, { useEffect, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './components/Header';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/auth/Loading';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Bookmarks from './pages/Bookmarks';
import bookMarkService from './services/bookmarks';

const App = () => {
  const { isLoading, user } = useAuth0();
  const [categoryArray, setCategoryArray] = useState([]);
  const [usernameSaved, setUsernameSaved] = useState(false);
  const [categoryArrayReceived, setCategoryArrayReceived] = useState(false);
  useEffect(() => {
    if (user !== undefined) {
      bookMarkService
        .saveUsernameToDatabase(user.nickname)
        .then(result => {
          setUsernameSaved(true);
          setCategoryArrayReceived(true);
        })
        .catch(error => console.log('username already registered'));
    }
    if (user !== undefined && !usernameSaved) {
      bookMarkService
        .getCategories(user.nickname)
        .then(categoryDataArray => {
          setCategoryArray(categoryDataArray);
          setCategoryArrayReceived(true);
        })
        .catch(error => console.log(error));
    }
  }, [user, usernameSaved]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categories">
          <Categories
            categoryArray={categoryArray}
            categoryArrayReceived={categoryArrayReceived}
            setCategoryArray={setCategoryArray}
          />
        </Route>
        <Route exact path="/:username/:category/bookmarks">
          <Bookmarks categoryArray={categoryArray} />
        </Route>
      </Switch>
    </ChakraProvider>
  );
};

export default App;
