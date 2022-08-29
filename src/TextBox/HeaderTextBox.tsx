import { DetailedHTMLProps, FC } from "react";
import Button from "../Buttons/Button";
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
    <div {...props} className="banner-box">
      <h1 className="banner-box-title">
        <span>{HEADER_MAIN_TEXT_ONE}</span>
        <br />
        <span>{HEADER_MAIN_TEXT_TWO}</span>
      </h1>
      <p className="banner-box-text">{HEADER_SUBHEADER}</p>
      <Button id="quiz_button" title={TAKE_THE_QUIZ} onClick={openQuizHandler} />
    </div>
  );
};

export default HeaderTextBox;
