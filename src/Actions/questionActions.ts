import { IQuestion } from "../models/models";

export const questionActions = () => {
  const getQuestions = async (): Promise<{ questions: IQuestion[] }> => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://manual-case-study.herokuapp.com/questionnaires/972423.json";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = (await response.json()) as Promise<{
        questions: IQuestion[];
      }>;
      return data;
    } catch (err) {
      throw err;
    }
  };

  return {
    getQuestions,
  };
};
