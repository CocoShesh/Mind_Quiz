import React, { useEffect, useState } from "react";
import { getQuizCategories } from "../../Api/Quiz";
import { Link } from "react-router-dom";
import { useOptions } from "../../Context/OptionsContext";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { selectedCategory, setSelectedCategory } = useOptions();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await getQuizCategories();
        setCategories(response);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const isCategorySelected = selectedCategory !== null;

  return (
    <>
      <section className="flex flex-col w-full  justify-center h-fit mt-20 items-center pb-10 ">
        <h2 className="text-xl font-semibold mb-4">Choose a Category</h2>
        <p className="text-lg mb-6">Select one of the following categories:</p>
        {isLoading && <div className="custom-loader"></div>}
        <section className="grid lg:grid-cols-4 gap-5 md:grid-cols-3  sm:grid-cols-2 grid-cols-2">
          {categories.map((category, index) => (
            <div key={index} className="mb-3">
              <button
                className={` hover:bg-blue-700 text-white font-bold  capitalize w-full p-5 rounded ${
                  selectedCategory === category ? "bg-[#1d4ed8]" : "bg-blue-500"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.name}
              </button>
            </div>
          ))}
        </section>
        <Link to="/difficulty">
          <button
            className={`mt-5 flex ${
              isCategorySelected
                ? "bg-green-500 hover:bg-green-700"
                : "bg-gray-300 cursor-not-allowed"
            } text-white font-bold py-5 px-5 rounded`}
            disabled={!isCategorySelected}
          >
            Next Page
          </button>
        </Link>
      </section>
    </>
  );
};

export default Categories;
