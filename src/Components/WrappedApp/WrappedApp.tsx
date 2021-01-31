// -> Beyond Codebase
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// -> Within Codebase
import UI_InfoProvider from '../UI_InfoProvider/UI_InfoProvider';
import App from '../App/App';

const WrappedApp: React.FC = () => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <UI_InfoProvider>
        <Router>
          <App />
        </Router>
      </UI_InfoProvider>
    </ApolloProvider>
  );
}

export default WrappedApp;
