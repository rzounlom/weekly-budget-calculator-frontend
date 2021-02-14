import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_DEV_APOLLO_CLIENT_URI,
  cache: new InMemoryCache(),
});
