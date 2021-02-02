// -> Beyond Codebase
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// -> Within Codebase
import UI_InfoProvider from '../UI_InfoProvider/UI_InfoProvider';
import App from '../App/App';
import { getAccessToken } from '../../accessToken';

const WrappedApp: React.FC = () => {
  
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql"
  });
  
  // -> Put the access JWT on every request, if it's available
  const authLink = setContext((_, { headers }) => {
    const accessToken = getAccessToken();
    return {
      headers: { "Authorization": (accessToken) ? `Bearer ${accessToken}` : "" }
    };
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    credentials: "include",
    name: "GQL JWT Client",
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
