import { FC, memo } from "react";
import { IQuestion } from "../models/models";
import { GO_BACK, REJECT_TEXT } from "../TextBox/constants";
import AnswerButton from "../Buttons/AnswerButton";
import Button from "../Buttons/Button";
import QuizResult from "./QuizResult";

type Props = {
  step: number;
  quizQuestions: IQuestion[];
  submitHandler: (value: string | boolean, isRejection: boolean) => void;
  revertHandler: () => void;
  isRejected: boolean;
};

const DisplayQuestions: FC<Props> = ({
  step,
  quizQuestions,
  submitHandler,
  revertHandler,
  isRejected,
}): JSX.Element => {
  for (let i = step; i < quizQuestions.length; ) {
    const { options, question } = quizQuestions[i];
    const [firstOption, secondOption] = options;

    return (
      <div className="quiz-question">
        <h3>{question}</h3>
        {firstOption && (
          <AnswerButton
            value={String(firstOption.value)}
            title={firstOption.display}
            id="first-answer"
            onClick={() =>
              submitHandler(firstOption.value, firstOption.isRejection)
            }
          />
        )}
        {secondOption && (
          <AnswerButton
            value={String(secondOption.value)}
            title={secondOption.display}
            id="second-answer"
            onClick={() =>
              submitHandler(secondOption.value, secondOption.isRejection)
            }
          />
        )}
        {step > 0 && <Button title={GO_BACK} onClick={revertHandler} />}
      </div>
    );
  }

  if (isRejected) {
    return (
      <div className="quiz-result">
        <p>{REJECT_TEXT}</p>
      </div>
    );
  } else {
    return <QuizResult />;
  }
};

export default memo(DisplayQuestions)
