import { FC } from "react";

type Props = {
  text: string;
  className?: string;
}

const BackgroundDigit: FC<Props> = ({ text, className }) => {

  return (
    <div className={`${className} background-digit`}>{text}</div>
  )
}

export default BackgroundDigit