import { DetailedHTMLProps, FC } from "react";
import QuizButton from "../Quiz/QuizButton";
import {
  HEADER_MAIN_TEXT_ONE,
  HEADER_MAIN_TEXT_TWO,
  HEADER_SUBHEADER,
  TAKE_THE_QUIZ,
} from "./constants";

type Props = {
  openQuizHandler: () => void;
} & DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const HeaderTextBox: FC<Props> = ({ openQuizHandler, ...props }) => {
  return (
    <div {...props} className="header-box-wrapper">
      <h1 className="header-main-text">
        <span>{HEADER_MAIN_TEXT_ONE}</span>
        <br />
        <span>{HEADER_MAIN_TEXT_TWO}</span>
      </h1>
      <p className="paragraph">{HEADER_SUBHEADER}</p>
      <QuizButton title={TAKE_THE_QUIZ} onClick={openQuizHandler} />
    </div>
  );
};

export default HeaderTextBox;
