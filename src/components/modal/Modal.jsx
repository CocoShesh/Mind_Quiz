import React, { useEffect } from "react";
import { useOptions } from "../../Context/OptionsContext";

const Modal = ({ handleClose, isCorrect }) => {
  const { questionIndex, questions, setAllFinalAnswer, AllfinalAnswer } =
    useOptions();

  const correctAnswerKey = Object.keys(
    questions[questionIndex]?.correct_answers
  ).find(key => questions[questionIndex]?.correct_answers[key] === "true");
  const trimmedCorrectAnswerKey = correctAnswerKey?.replace("_correct", "");
  const finalAnswer =
    questions[questionIndex]?.answers[trimmedCorrectAnswerKey];

  useEffect(() => {
    saveCorrectAnswer();
  }, []); // Run only once when the component mounts

  const saveCorrectAnswer = () => {
    setAllFinalAnswer(prev => [...prev, finalAnswer]);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center px-3 bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-xl font-semibold mb-4">
          {isCorrect ? "Correct! 😊" : "Incorrect! 😞"}
        </h1>
        <p className="text-lg mb-4">
          {isCorrect
            ? "You got it right! 🎉"
            : `The correct answer is: ${finalAnswer} 👍`}
        </p>
        <button
          onClick={handleClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
