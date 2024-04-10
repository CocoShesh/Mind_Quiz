import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;
const key = import.meta.env.VITE_APP_API_KEY;

export const getQuizCategories = async () => {
  try {
    let config = {
      method: "get",
      url: `${baseURL}/categories?apiKey=${key}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getQuizQuestions = async (category, numQuestions, difficulty) => {
  try {
    let config = {
      method: "get",
      url: `${baseURL}/questions?apiKey=${key}&category=${category}&limit=${numQuestions}&difficulty=${difficulty}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
