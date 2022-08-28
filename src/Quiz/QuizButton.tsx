import { FC, memo } from "react";
import "../App.scss"

type Props = {
  onClick: () => void;
  title: string;
}

const QuizButton: FC<Props> = ({ onClick, title }) => {

  return (
    <button className="quiz-button" onClick={onClick}>
      {title}
    </button>
  )
}

export default memo(QuizButton)