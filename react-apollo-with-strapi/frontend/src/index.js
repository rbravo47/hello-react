import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';


import { BrowserRouter as Router } from 'react-router-dom';

import client from './utils/apolloClient';
import { ApolloProvider } from '@apollo/client';


ReactDOM.render(
  <Router>

    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>

  </Router>,
  document.getElementById('root')
);