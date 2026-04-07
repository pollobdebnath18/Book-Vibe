import React from "react";
import BookImg from '../../assets/pngwing 1.png'

const Banner = () => {
  return (
    <div
      className="max-w-[1100px] px-5 hero bg-base-200 min-h-[70vh] my-10 container mx-auto
    "
    >
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
        <img
          src={BookImg}
        />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn btn-success mt-7">View the List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
