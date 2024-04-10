import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useOptions } from "../../Context/OptionsContext";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();
  const { score, questions, answerPerQuestions, AllfinalAnswer } = useOptions();
  const [showConfirmation, setShowConfirmation] = useState(false);

  let message;
  if (score === 0) {
    message = "Better luck next time! 😞";
  } else if (score >= 1 && score < 5) {
    message = "Not bad! 😊";
  } else {
    message = "Congratulations! 🎉";
  }

  const handleTryAgainClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmTryAgain = () => {
    setShowConfirmation(false);
    navigate("/categories");
    window.location.reload();
  };
  //filter out the unique answers
  const uniqueFinalAnswers = Array.from(new Set(AllfinalAnswer));
  return (
    <>
      <section className="flex flex-col w-full justify-center h-full items-center max-sm:px-3 pb-10">
        <section className="w-[500px] h-[500px] overflow-scroll  max-sm:w-full mt-10 bg-white shadow-lg p-5 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Your Score: {score}</h2>
          <section className="flex flex-col items-center justify-center">
            <section style={{ width: 150, height: 150 }} className="mb-5">
              <CircularProgressbar
                value={score}
                maxValue={questions?.length}
                text={`${score} / ${questions?.length}`}
                styles={buildStyles({ pathColor: "#2728bd" })}
              />
            </section>
            <p>{message}</p>
            <div className="flex mt-5">
              <button
                className="mr-4 bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600"
                onClick={handleTryAgainClick}
              >
                Try Again
              </button>
              <button className="mr-4 bg-green-500 text-white px-5 py-2 rounded-md transition duration-300 ease-in-out hover:bg-green-900">
                <a href="/">Home </a>
              </button>
              {showConfirmation && (
                <div className="fixed inset-0 flex justify-center items-center px-3 bg-black bg-opacity-50 z-50">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <p>Are you sure you want to try again?</p>
                    <div className="flex  gap-5 items-center justify-center mt-5">
                      <button
                        className="mr-2 bg-green-500 text-white px-5 py-3 rounded-md hover:bg-green-600"
                        onClick={handleConfirmTryAgain}
                      >
                        Yes
                      </button>
                      <button
                        className="bg-red-500 text-white px-5 py-3 rounded-md hover:bg-red-600"
                        onClick={() => setShowConfirmation(false)}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
          <p className="font-semibold mb-2 mt-5">
            <span className="text-blue-600 text-2xl">History:</span>
          </p>
          {questions?.map((question, index) => {
            const userAnswer = answerPerQuestions[index]?.answer;
            const correctAnswer = uniqueFinalAnswers[index];
            const isCorrect = userAnswer === correctAnswer;

            return (
              <div
                key={index}
                className="mt-5 border border-gray-300 p-4 rounded-lg"
              >
                <p className="font-semibold mb-2">Question:</p>
                <p className="text-gray-700">{question.question}</p>
                <div className="flex justify-between mt-3 gap-5">
                  <div>
                    <p className="font-semibold">Your Answer:</p>
                    <p>{userAnswer}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Correct Answer:</p>
                    <p>{correctAnswer}</p>
                  </div>
                </div>
                {isCorrect ? (
                  <p className="text-green-600 mt-2">Correct!</p>
                ) : (
                  <p className="text-red-600 mt-2">Incorrect</p>
                )}
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Results;