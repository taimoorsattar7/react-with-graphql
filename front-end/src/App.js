import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Booklist from './components/booklist';

import './App.css';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>

      <div className="App">
        <Booklist />
      </div>

    </ApolloProvider>
  );
}

export default App;