import { DetailedHTMLProps, FC, memo } from "react";
import "../App.scss";

type Props = {
  onClick: () => void;
  title: string;
} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const QuizButton: FC<Props> = ({ onClick, title, ...props }) => {
  return (
    <button {...props} className="quiz-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default memo(QuizButton);
