import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import Book from "../Shared/NavBar/Book";

const ListedReadlist = ({sortingType}) => {
  const { readlistBooks } = useContext(BookContext);

  const [filteredReadlist, setFilteredReadlist] = useState(readlistBooks);
  
    useEffect(() => {
      if (sortingType) {
        if (sortingType === "pages") {
          const sortedData = [...readlistBooks].sort(
            (a, b) => a.totalPages - b.totalPages,
          );
          console.log(sortedData)
          setFilteredReadlist(sortedData);
        } else if (sortingType === "rating") {
          const sortedData = [...readlistBooks].sort(
            (a, b) => a.rating - b.rating,
          );
          setFilteredReadlist(sortedData);
        }
      }
    }, [sortingType, readlistBooks]);

  if (filteredReadlist.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-200 flex justify-center items-center">
        <h2 className="text-3xl font-bold">No Read list data is Found</h2>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredReadlist.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default ListedReadlist;
