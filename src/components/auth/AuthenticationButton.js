import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Loading';

const AuthenticationButton = () => {
  const { isAuthenticated, user } = useAuth0();
  if (isAuthenticated) {
    if (user === undefined) {
      return <Loading />;
    } else return <LogoutButton />;
  } else {
    return <LoginButton />;
  }
};

export default AuthenticationButton;
