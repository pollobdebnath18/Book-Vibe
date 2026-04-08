import React, { use } from "react";
import Book from "./Book";

const booksPromise = fetch("/booksData.json").then((res) => res.json());
const AllBook = () => {
  const books = use(booksPromise);
  //   console.log(books);
  return (
    <div className="max-w-[1100px] mx-auto ">
      <h2 className="text-3xl font-bold text-center mb-5 mt-5">Books</h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10
      "
      >
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default AllBook;
