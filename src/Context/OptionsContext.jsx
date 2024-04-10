import { useContext, createContext, useState } from "react";

const OptionsContext = createContext();

export const useOptions = () => {
  return useContext(OptionsContext);
};

export const OptionsProvider = ({ children }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerPerQuestions, setAnswerPerQuestions] = useState([]);
  const [AllfinalAnswer, setAllFinalAnswer] = useState([]);
  return (
    <OptionsContext.Provider
      value={{
        selectedNumber,
        setSelectedNumber,
        selectedDifficulty,
        setSelectedDifficulty,
        selectedCategory,
        setSelectedCategory,
        setScore,
        setQuestionIndex,
        questionIndex,
        questions,
        setQuestions,
        score,
        setAnswerPerQuestions,
        answerPerQuestions,
        setAllFinalAnswer,
        AllfinalAnswer,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};
