import { FC } from "react";
import { GO_TO_SITE, manualUrl, QUIZ_RESULT } from "../TextBox/constants";
import QuizButton from "./QuizButton";

const QuizResult: FC = () => {
  const submitHandler = () => window.open(manualUrl);

  return (
    <div className="quiz-question-wrapper quiz-result">
      <p>{QUIZ_RESULT}</p>
      <QuizButton title={GO_TO_SITE} onClick={submitHandler} />
    </div>
  );
};

export default QuizResult;
