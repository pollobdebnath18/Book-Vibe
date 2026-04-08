import React, { useContext, useEffect, useState } from "react";
import Book from "../Shared/NavBar/Book";
import { BookContext } from "../../context/BookProvider";
import { DiFirebase } from "react-icons/di";

const ListedWishlist = ({ sortingType }) => {
  const { wishlistBooks } = useContext(BookContext);
  const [filteredWishlist, setFilteredWishlist] = useState(wishlistBooks);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...wishlistBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredWishlist(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...wishlistBooks].sort(
          (a, b) => a.rating - b.rating,
        );
        setFilteredWishlist(sortedData);
      }
    }
  }, [sortingType, wishlistBooks]);

  if (filteredWishlist.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-200 flex justify-center items-center">
        <h2 className="text-3xl font-bold">No Wish list data is Found</h2>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredWishlist.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default ListedWishlist;
