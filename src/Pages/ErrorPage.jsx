import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">

        {/* Error Code */}
        <h1 className="text-8xl font-extrabold text-error mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-2">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-base-content/70 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="btn btn-primary btn-wide">
            Go Back Home
          </button>
        </Link>

        {/* Optional Illustration */}
        <div className="mt-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="404 Illustration"
            className="w-40 mx-auto opacity-80"
          />
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;