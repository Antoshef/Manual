import { FC } from "react";

type Props = {
  text: string;
  className?: string;
};

const BackgroundDigit: FC<Props> = ({ text, className }) => {
  return <div className={`${className} body-article-background`}>{text}</div>;
};

export default BackgroundDigit;
