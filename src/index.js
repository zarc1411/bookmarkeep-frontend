import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './components/auth/Auth0ProviderWithHistory';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
