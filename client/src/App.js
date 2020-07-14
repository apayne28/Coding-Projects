import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//components
import BookList from "./components/BookLists";
import AddBook from "./components/AddBook";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Ashley's Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
