import { DetailedHTMLProps, FC, memo } from "react";
import "../App.scss";

type Props = {
  onClick: () => void;
  title: string;
} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<Props> = ({ onClick, title, ...props }) => {
  return (
    <button {...props} className={`${props.className} button`} onClick={onClick}>
      {title}
    </button>
  );
};

export default memo(Button);
