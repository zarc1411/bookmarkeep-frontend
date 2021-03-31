import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './components/Header';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/Loading';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Categories from './pages/Categories';
const App = () => {
  const { isLoading } = useAuth0();
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
          <Categories />
        </Route>
      </Switch>
    </ChakraProvider>
  );
};

export default App;
