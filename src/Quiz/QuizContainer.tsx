import { FC, useCallback, useEffect, useState } from "react";
import { questionActions } from "../Actions/questionActions";
import LogoImage from "../img/Symbol.png";
import { IQuizForm } from "../models/models";
import { BACK_BUTTON, ERROR_TEXT, manualUrl } from "../TextBox/constants";
import { Circles } from "react-loader-spinner";
import DisplayQuestions from "./DisplayQuestions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { updateQuestions } from "../Actions/quizAction";
import Button from "../Buttons/Button";

type Props = {
  onClose: () => void;
};

const QuizContainer: FC<Props> = ({ onClose }) => {
  const quizQuestions = useSelector(
    (state: RootState) => state.questionsReducer.questions
  );
  const [form, setForm] = useState<IQuizForm[]>([]);
  const [step, setStep] = useState<number>(0);
  const [isRejected, setIsRejected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { getQuestions } = questionActions();
  const dispatch = useDispatch();

  useEffect(() => {
    !Boolean(quizQuestions.length) && updateData();
  }, []);

  const updateData = async () => {
    try {
      setIsLoading(true);
      const { questions } = await getQuestions();
      dispatch(updateQuestions(questions));
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(true);
      throw err;
    }
  };

  const submitHandler = useCallback(
    (value: string | boolean, isRejection: boolean) => {
      // if value is of type boolean, transform to: "Yes" / "No"
      const transformedValue =
        typeof value === "boolean" ? (value === true ? "Yes" : "No") : value;

      if (isRejection) {
        setIsRejected(true);
        setStep(quizQuestions.length + 1);

        // check if answer exist in the form and update it's values
      } else if (form[step]) {
        const refactoredForm = [...form];
        refactoredForm[step] = {
          answer: transformedValue,
          question: quizQuestions[step].question,
          isRejection,
        };
        setForm(refactoredForm);
        setStep((prevState) => prevState + 1);
      } else {
        setForm((prevForm) => [
          ...prevForm,
          {
            answer: transformedValue,
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

  return (
    <section className="quiz">
      <div className="quiz-title">
        <div>
          <a target="_blank" href={manualUrl}>
            <img alt="manual logo" src={LogoImage} />
          </a>
        </div>
        <div>
          {!error && step < quizQuestions.length && (
            <span>{`${step + 1} of ${quizQuestions.length}`}</span>
          )}
          <Button
            title={BACK_BUTTON}
            className="close-button"
            onClick={onClose}
          />
        </div>
      </div>
      {isLoading && <Circles wrapperClass="loader" />}
      {!isLoading && !error && Boolean(quizQuestions.length) && (
        <DisplayQuestions
          isRejected={isRejected}
          quizQuestions={quizQuestions}
          revertHandler={revertAnswer}
          step={step}
          submitHandler={submitHandler}
        />
      )}
      {!isLoading && error && <p>{ERROR_TEXT}</p>}
    </section>
  );
};

export default QuizContainer;
