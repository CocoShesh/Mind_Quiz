import React from "react";
import { Link } from "react-router-dom";

const ErrorMessage = () => {
  return (
    <section className="w-[500px] h-[500px] max-sm:w-full mt-10 bg-white shadow-lg p-5 rounded-xl flex flex-col justify-center items-center">
      <p className="text-red-500 text-lg font-semibold mb-8 text-center">
        Oops! It seems you haven't selected a category yet. Please return to the
        category page and choose a question.
      </p>
      <Link to="/categories">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Go Back to Categories
        </button>
      </Link>
    </section>
  );
};

export default ErrorMessage;
