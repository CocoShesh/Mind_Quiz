import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useOptions } from "../../Context/OptionsContext";
const Difficulty = () => {
  const {
    selectedNumber,
    setSelectedNumber,
    selectedDifficulty,
    setSelectedDifficulty,
  } = useOptions();

  const CheckIfSelected =
    selectedNumber !== null && selectedDifficulty !== null;
  return (
    <>
      <section className="flex flex-col w-full  border-2 justify-center h-[500px]  items-center">
        <h2 className="text-xl font-semibold mb-4">Quiz Options</h2>

        <div className="mb-6 max-xs:w-full max-xs:px-2">
          <p className="mb-2">Number of Questions:</p>
          <div className="flex space-x-4 max-xs:space-x-2">
            {[5, 10, 15, 20].map(num => (
              <button
                key={num}
                onClick={() => setSelectedNumber(num)}
                className={` hover:bg-blue-700 text-white font-bold  capitalize w-full  px-8 max-xs:px-0 py-5 rounded ${
                  selectedNumber === num ? "bg-[#1d4ed8]" : "bg-blue-500"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 max-xs:w-full max-xs:px-2 ">
          <p className="mb-2">Difficulty Level:</p>
          <div className="flex space-x-4 max-xs:space-x-2">
            {["easy", "medium", "hard"].map(level => (
              <button
                key={level}
                onClick={() => setSelectedDifficulty(level)}
                className={` hover:bg-blue-700 text-white font-bold  capitalize w-full px-8 max-xs:px-0  py-5 rounded ${
                  selectedDifficulty === level ? "bg-[#1d4ed8]" : "bg-blue-500"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <Link to="/quiz">
          <button
            disabled={!CheckIfSelected}
            className={`  text-white font-bold py-4 px-6 rounded  ${
              CheckIfSelected
                ? "bg-green-500 hover:bg-green-700"
                : "bg-gray-300  cursor-not-allowed"
            }`}
          >
            Start Quiz
          </button>
        </Link>
      </section>
    </>
  );
};

export default Difficulty;
