import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { concatPagination } from "@apollo/client/utilities";

 const apolloClient = new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: process.env.GQL_ENDPOINT, // Server URL (must be absolute)
      headers: {
        'token': process.env.GQL_API_KEY, // Replace with your actual API key
    }
    }),
    cache: new InMemoryCache(),
 });

export default apolloClient;