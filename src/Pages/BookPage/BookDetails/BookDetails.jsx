import React, { use, useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../../context/BookProvider";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();

  // console.log(typeof id, typeof books);
  const expectedBook = books.find((book) => book.bookId == id);
  const {
    // bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;
  // console.log(expectedBook);

  const {handleRead} = useContext(BookContext);
  const {handleWishlist} = use(BookContext);
  // console.log(handleRead);

 
  return (
    <div className="max-w-[1100px] mx-auto gap-5 grid grid-cols-2  bg-base-100 shadow-sm mt-10 mb-10">
      <div className="flex justify-center items-center bg-gray-200 rounded-2xl">
        <figure className="">
          <img src={image} alt="Album" className="h-[500px]  rounded-xl" />
        </figure>
      </div>
      <div className="px-5 py-4">
        <h2 className="card-title text-3xl font-bold">{bookName}</h2>
        <p className="  pb-4">By : {author}</p>
        <p className="py-4 border-y">{category}</p>
        <p className="font-bold pt-4">
          Review : <span className="font-normal">{review}</span>
        </p>
        <div className="flex items-center font-bold gap-2 pt-4 pb-4">
          tag{" "}
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-success text-white">
              {tag}
            </div>
          ))}
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between items-center ">
            <span>Number of Pages</span> <span>{totalPages}</span>
          </div>
          <div className="flex justify-between items-center ">
            <span>Publisher</span> <span>{publisher}</span>
          </div>
          <div className="flex justify-between items-center ">
            <span>Year of Publishing</span> <span>{yearOfPublishing}</span>
          </div>
          <div className="flex justify-between items-center ">
            <span>rating</span> <span>{rating}</span>
          </div>
          <div className="pt-3 flex gap-4">
            <button
              onClick={() => handleRead(expectedBook)}
              className="btn btn-soft"
            >
              Read
            </button>
            <button onClick={()=>handleWishlist(expectedBook)} className="btn bg-[#50B1C9] text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
