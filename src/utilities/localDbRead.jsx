const getAllReadListFromLocalDb = () => {
  const allReadList = localStorage.getItem("readlistBooks");
  if (allReadList) return JSON.parse(allReadList);
  return [];
};

const addReadListToLocalDb = (book) => {
  const allBooks = getAllReadListFromLocalDb();

  const isExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isExist) {
    allBooks.push(book);
    localStorage.setItem("readlistBooks", JSON.stringify(allBooks));
  }
};
export { getAllReadListFromLocalDb, addReadListToLocalDb };
