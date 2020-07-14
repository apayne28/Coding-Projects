import React from "react";
import { graphql, Query } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

function BookList() {
  const displayBooks = () => (
    <Query query={getBooksQuery}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading Books...</p>;
        }
        if (error) {
          return <p>Error Loading Books...</p>;
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
