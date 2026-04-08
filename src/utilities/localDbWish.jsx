const getAllWishListFromLocalDb = () => {
  const allWishList = localStorage.getItem("wishlistBooks");
  if (allWishList) return JSON.parse(allWishList);
  return [];
};
const addWishListToLocalDb = (book) => {
  const allBooks = getAllWishListFromLocalDb();
  const isExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isExist) {
    allBooks.push(book);
    localStorage.setItem("wishlistBooks", JSON.stringify(allBooks));
  }
};
export { getAllWishListFromLocalDb, addWishListToLocalDb };
