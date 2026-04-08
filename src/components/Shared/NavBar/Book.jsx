import React, {  } from "react";
import { FaRegStar } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router";
import { BookContext } from "../../../context/BookProvider";

const Book = ({ book }) => {
  
//   console.log(book);
  const {bookId, author, bookName, image, category, tags,rating } = book;
  return (
    <Link to={`/bookDetails/${bookId}`} className="card bg-base-100  shadow-sm ">
      <figure className="p-6 bg-gray-300">
        <img className="h-[250px] rounded-xl" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          {tags.map((tag,index) => (
            <div key={index} className="badge badge-success text-white">{tag}</div>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>By : {author}</p>
        <div className="card-actions justify-between border-t border-gray-400 pt-5">
          <div className="font-semibold">{category}</div>
          <div className="flex gap-2 items-center font-semibold">{rating} <FaRegStar></FaRegStar> </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
