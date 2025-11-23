import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: '/content/cq:graphql/myproject/endpoint.json', credentials: 'include' }),
  cache: new InMemoryCache(),
})
