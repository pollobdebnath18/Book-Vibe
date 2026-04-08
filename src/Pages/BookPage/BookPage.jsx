import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadlist from "../../components/ListedBooks/ListedReadlist";
import ListedWishlist from "../../components/ListedBooks/ListedWishlist";

const BookPage = () => {
  const { readlistBooks, wishlistBooks } = useContext(BookContext);
  const [sortingType, setSortingType] = useState("");
  console.log(sortingType)

  console.log("readlistBooks", readlistBooks, "wishlist books", wishlistBooks);
  return (
    <div className="max-w-[1100px] mx-auto mt-6 py-5">
      <div className="dropdown dropdown-start flex justify-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort: {sortingType}⬇️
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => setSortingType("pages")}>
            <a>Pages</a>
          </li>
          <li onClick={() => setSortingType("rating")}>
            <a>Rating</a>
          </li>
        </ul>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadlist sortingType={sortingType}></ListedReadlist>
        </TabPanel>
        <TabPanel>
          <ListedWishlist sortingType={sortingType}></ListedWishlist>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookPage;
