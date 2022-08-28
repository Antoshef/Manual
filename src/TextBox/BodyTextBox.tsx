import { FC } from "react";

type Props = {
  title: string;
  header: string;
  text: string;
};

const BodyTextBox: FC<Props> = ({ title, header, text }) => {
  return (
    <div className="body-text-box">
      <span className="text-box-title">{title}</span>
      <h3 className="text-box-header">{header}</h3>
      <p className="text-box-text">{text}</p>
    </div>
  );
};

export default BodyTextBox;
