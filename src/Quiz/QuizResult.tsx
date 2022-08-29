import { FC } from "react";
import { GO_TO_SITE, manualUrl, QUIZ_RESULT } from "../TextBox/constants";
import Button from "../Buttons/Button";

const QuizResult: FC = () => {
  const submitHandler = () => window.open(manualUrl);

  return (
    <div className="quiz-question quiz-result">
      <p>{QUIZ_RESULT}</p>
      <Button title={GO_TO_SITE} onClick={submitHandler} />
    </div>
  );
};

export default QuizResult;
