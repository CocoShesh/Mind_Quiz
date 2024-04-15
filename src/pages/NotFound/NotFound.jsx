import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-10">
      <img src="/assets/logos/404.svg" alt="404" className="h-[500px]" />
      <h1 className="text-3xl font-bold mb-2">404</h1>
      <p className="text-lg mb-4">Oops! Looks like you're lost.</p>
      <p className="text-lg mb-8">Let's get you back on track.</p>
      <Link
        to="/"
        className="text-lg bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
