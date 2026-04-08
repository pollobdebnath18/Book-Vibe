import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDb,
  getAllReadListFromLocalDb,
} from "../utilities/localDbRead";
import {
  addWishListToLocalDb,
  getAllWishListFromLocalDb,
} from "../utilities/localDbWish";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readlistBooks, setStoreBooks] = useState(() =>
    getAllReadListFromLocalDb(),
  );
  const [wishlistBooks, setWishlistBooks] = useState(() =>
    getAllWishListFromLocalDb(),
  );

  // useEffect(() => {
  //   const getReadlistFromLocalDb = getAllReadListFromLocalDb();
  //   console.log("getReadlistFromLocalDb", getReadlistFromLocalDb);
  // }, []);
  const handleWishlist = (currentWishlist) => {
    addWishListToLocalDb(currentWishlist);
    const isExistWishlist = wishlistBooks.find(
      (wishlist) => wishlist.bookId === currentWishlist.bookId,
    );

    const isExistRead = readlistBooks.find(
      (book) => book.bookId === currentWishlist.bookId,
    );
    if (isExistRead) {
      toast.error("The Book is already in Read list");
      return;
    }

    if (isExistWishlist) {
      toast.error("The Book is aleady exist");
    } else {
      setWishlistBooks([...wishlistBooks, currentWishlist]);
      toast.success(`${currentWishlist.bookName} is added in Wishlist`);
    }
  };

  const handleRead = (currentBook) => {
    addReadListToLocalDb(currentBook);
    const isExistBook = readlistBooks.find(
      (book) => book.bookId == currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The Book is already exist");
    } else {
      setStoreBooks([...readlistBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added in Readlist`);
    }
  };

  const data = {
    readlistBooks,
    setStoreBooks,
    handleRead,
    wishlistBooks,
    setWishlistBooks,
    handleWishlist,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
