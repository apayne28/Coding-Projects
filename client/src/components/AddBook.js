import React, { Component } from "react";

import { useQuery } from "@apollo/react-hooks";

import { getAuthorsQuery } from "../queries/queries";

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  const displayAuthorOptions = () => {
    if (loading) return <option>loading...</option>;

    let { authors } = data;

    return authors.map((author) => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  };

  const [book, setBook] = React.useState({ name: "", genre: "", authorId: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(book);
  };

  return (
    <form className="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book Name:</label>

        <input
          value={book.name}
          onChange={(e) => setBook({ ...book, name: e.target.value })}
          type="text"
        />
      </div>

      <div className="field">
        <label>Book Genre:</label>

        <input
          value={book.genre}
          onChange={(e) => setBook({ ...book, genre: e.target.value })}
          type="text"
        />
      </div>

      <div className="field">
        <label>Book Author:</label>

        <select
          value={book.authorId}
          onChange={(e) => setBook({ ...book, authorId: e.target.value })}
        >
          <option>Select author</option>
          {displayAuthorOptions()}
        </select>
      </div>

      <button>Submit</button>
    </form>
  );
}

export default AddBook;
