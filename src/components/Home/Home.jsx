import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="flex flex-col w-full     h-full items-center  mt-44   ">
        <div className="text-3xl font-semibold mb-5  w-[70%] text-center  h-fit max-md:w-full">
          Welcome to Mind Quiz! Test your knowledge and challenge yourself with
          our quizzes.
        </div>
        <Link
          to="/categories"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-5 mt-5 rounded"
        >
          Get Started
        </Link>
      </section>
    </>
  );
};

export default Home;
