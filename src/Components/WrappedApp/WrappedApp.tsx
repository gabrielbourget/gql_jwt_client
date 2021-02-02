// -> Beyond Codebase
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ApolloClient, InMemoryCache, ApolloProvider,
  ApolloLink, Observable, HttpLink
} from "@apollo/client";
import { onError } from "@apollo/client/link/error"
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwtDecode from "jwt-decode"
// -> Within Codebase
import UI_InfoProvider from '../UI_InfoProvider/UI_InfoProvider';
import { getAccessToken, setAccessToken } from '../../accessToken';
import App from '../App/App';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_URL } from '../../constants';

const WrappedApp: React.FC = () => {

  const tokenRefreshLink = new TokenRefreshLink({
    accessTokenField: ACCESS_TOKEN_KEY,
    isTokenValidOrUndefined: () => {
      const token = getAccessToken();

      if (!token) return false;

      try {
        const { exp }: any = jwtDecode(token);
        console.log("boop");
        if (Date.now() >= (exp * 1000)) return false;
        else return true;
      } catch (err) {
        return false;
      }
    },
    fetchAccessToken: async () => {
      return fetch(REFRESH_TOKEN_URL, {
        method: "POST",
        credentials: "include",
      });
    },
    handleFetch: accessToken => {
      setAccessToken(accessToken);
    },
    handleError: () => console.error("There was a problem refreshing your access token, please log in.")
  });

  const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable(observer => {
        let handle: any;
        Promise.resolve(operation)
          .then(operation => {
            const accessToken = getAccessToken();
            if (accessToken) {
              operation.setContext({
                headers: { Authorization: `Bearer ${accessToken}` }
              });
            }
          })
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            });
          })
          .catch(observer.error.bind(observer));

        return () => {
          if (handle) handle.unsubscribe();
        }
      })
  );

  const client = new ApolloClient({
    link: ApolloLink.from([
      tokenRefreshLink,
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) console.log("GraphQL errors ->", graphQLErrors);
        if (networkError) console.log("Network errors ->", networkError);
      }),
      requestLink,
      new HttpLink({
        uri: "http://localhost:4000/graphql",
        // credentials: "include",
      })
    ]),
    cache: new InMemoryCache(),
    // - TODO: -> Fix CORS problem.
    // credentials: "include",
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
