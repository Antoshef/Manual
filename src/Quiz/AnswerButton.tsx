import { DetailedHTMLProps, FC, memo } from "react";
import "../App.scss";

type Props = {
  onClick: (e: any) => void;
  title: string;
} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const AnswerButton: FC<Props> = ({ onClick, title, ...props }) => {
  return (
    <button {...props} className="answer-button" onClick={onClick}>
      {!title.includes("<img") ? (
        title
      ) : (
        <div dangerouslySetInnerHTML={{ __html: title }} />
      )}
    </button>
  );
};

export default memo(AnswerButton);
