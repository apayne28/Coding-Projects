import React from "react";
import { gql } from "apollo-boost";
import { graphql, Query } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

function BookList() {
  const displayBooks = () => (
    <Query query={getBooksQuery}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading Books...</p>;
        } else {
          return data.books.map(({ id, name }) => <li key={id}>{name}</li>);
        }
      }}
    </Query>
  );
  return (
    <div id="main">
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
