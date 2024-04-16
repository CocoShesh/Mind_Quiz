import React, { useEffect, useState } from "react";
import { getQuizQuestions } from "../../Api/Quiz";
import { useOptions } from "../../Context/OptionsContext";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import ErrorMessage from "../../components/Error/ErrorMessage";
const Quiz = () => {
  const navigate = useNavigate();
  const {
    selectedNumber,
    selectedDifficulty,
    selectedCategory,
    setScore,
    setQuestions,
    questions,
    questionIndex,
    setQuestionIndex,
    setAnswerPerQuestions,
    answerPerQuestions,
  } = useOptions();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading(true);
      try {
        const response = await getQuizQuestions(
          selectedCategory.name,
          selectedNumber,
          selectedDifficulty
        );
        setQuestions(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchQuestions();
  }, [selectedCategory, selectedNumber, selectedDifficulty]);

  //  next button
  const handleNextQuestion = () => {
    compareAnswers();
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    const lastSelectedAnswer = selectedAnswers;

    setSelectedAnswers(null);
    setAnswerPerQuestions(prevAnswers => [...prevAnswers, lastSelectedAnswer]);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      navigate("/results");
    }
  };

  // printing the correct answer and save it to the state
  const compareAnswers = () => {
    const correctAnswers = Object.values(
      questions[questionIndex]?.correct_answers
    );

    const selectedAnswerIndex = selectedAnswers?.index;

    if (correctAnswers[selectedAnswerIndex] === "true") {
      setScore(prevScore => prevScore + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <>
      <section className="flex flex-col w-full  justify-center h-full items-center  max-sm:px-3 pb-10">
        {isLoading && <div className="custom-loader flex mx-auto"></div>}
        {selectedCategory === null ? (
          <ErrorMessage />
        ) : (
          <section className="w-[500px] h-fit max-sm:w-full    mt-10 bg-white shadow-lg p-5 rounded-xl">
            {questions?.length > 0 && (
              <>
                <h2>
                  {questionIndex + 1} of {questions?.length} questions
                </h2>{" "}
                <br />
                <hr />
                <p className="my-5">{questions[questionIndex]?.question}</p>
                {Object.values(questions[questionIndex]?.answers)
                  .filter(answer => answer !== null)
                  .map((answer, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedAnswers({ answer, index })}
                      className={`w-full h-fit cursor-pointer text-[#806788] border border-[#cbcbcb] mb-5 px-3 py-2 rounded-md hover:bg-[#ffdde2] ${
                        selectedAnswers && selectedAnswers.index === index
                          ? "bg-[#ffdde0]  "
                          : ""
                      }`}
                    >
                      {answer}
                    </div>
                  ))}
                <button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswers === null}
                  className={`flex ml-auto  p-4 text-white rounded-md  ${
                    selectedAnswers === null
                      ? " bg-red-500  cursor-not-allowed "
                      : "bg-[#0c68ed]  "
                  }`}
                >
                  Next Question
                </button>
              </>
            )}
          </section>
        )}
      </section>

      {openModal && (
        <Modal handleClose={handleCloseModal} isCorrect={isCorrect} />
      )}
    </>
  );
};

export default Quiz;
