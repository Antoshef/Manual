import { FC, useCallback, useEffect, useState } from "react";
import { questionActions } from "../Actions/questionActions";
import AnswerButton from "./AnswerButton";
import LogoImage from "../img/Symbol.png";
import { IQuestion, IQuizForm } from "../models/models";
import { GO_BACK, manualUrl, REJECT_TEXT } from "../TextBox/constants";
import QuizResult from "./QuizResult";
import { Circles } from  'react-loader-spinner'
import QuizButton from "./QuizButton";

type Props = {
  onClose: () => void;
};

const QuizContainer: FC<Props> = ({ onClose }) => {
  const [quizQuestions, setQuizQuestions] = useState<IQuestion[]>([]);
  const [form, setForm] = useState<IQuizForm[]>([]);
  const [step, setStep] = useState<number>(0);
  const [isRejected, setIsRejected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { getQuestions } = questionActions();

  useEffect(() => {
    updateQuestions();
  }, []);

  const updateQuestions = async () => {
    try {
      setIsLoading(true);
      const { questions } = await getQuestions();
      setQuizQuestions(questions);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(true);
      throw err;
    }
  };

  const submitHandler = useCallback(
    (value: string | boolean, isRejection: boolean) => {
      const refactoredValue =
        typeof value === "boolean" ? (value === true ? "Yes" : "No") : value;

      if (isRejection) {
        setIsRejected(true);
        setStep(quizQuestions.length + 1);
      } else if (form[step]) {
        const refactoredForm = [...form];
        refactoredForm[step] = {
          answer: refactoredValue,
          question: quizQuestions[step].question,
          isRejection,
        };
        setForm(refactoredForm);
        setStep((prevState) => prevState + 1);
      } else {
        setForm((prevForm) => [
          ...prevForm,
          {
            answer: refactoredValue,
            question: quizQuestions[step].question,
            isRejection,
          },
        ]);
        setStep((prevState) => prevState + 1);
      }
    },
    [quizQuestions, step]
  );

  const revertAnswer = useCallback(() => {
    setStep((prevState) => prevState - 1);
  }, []);

  const DisplayQuestion = (): JSX.Element => {
    for (let i = step; i < quizQuestions.length; ) {
      const { options, question } = quizQuestions[i];
      const [firstOption, secondOption] = options;

      return (
        <div className="quiz-question-wrapper">
          <h4 className="quiz-question">{question}</h4>
          {firstOption && (
            <AnswerButton
              value={String(firstOption.value)}
              title={firstOption.display}
              onClick={() =>
                submitHandler(firstOption.value, firstOption.isRejection)
              }
            />
          )}
          {secondOption && (
            <AnswerButton
              value={String(secondOption.value)}
              title={secondOption.display}
              onClick={() =>
                submitHandler(secondOption.value, secondOption.isRejection)
              }
            />
          )}
          {step > 0 && <QuizButton title={GO_BACK} onClick={revertAnswer} />}
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

  console.log(form, "FORM");

  return (
    <section className="quiz-wrapper">
      <div className="quiz-header">
        <div>
          <a target="_blank" href={manualUrl}>
            <img alt="manual logo" src={LogoImage} />
          </a>
        </div>
        <div>
          {!error && step < quizQuestions.length && (
            <span>{`${step + 1} of ${quizQuestions.length}`}</span>
          )}
          <button className="close-button" onClick={onClose}>Back</button>
        </div>
      </div>
      {isLoading && <Circles wrapperClass="loader" />}
      {!isLoading &&
        !error &&
        Boolean(quizQuestions.length) &&
        DisplayQuestion()}
      {!isLoading && error && <p>There was an error while fetching data.</p>}
    </section>
  );
};

export default QuizContainer;
