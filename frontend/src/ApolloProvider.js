import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

//create a new instance of the Apollo client
const client = new ApolloClient({
    uri:"http://localhost:4000/",
    cache:new InMemoryCache()
});

//provider will allow use of Apollo Client in the react components
const ApolloProviderComponent = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloProviderComponent;