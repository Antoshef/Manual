import { FC } from "react";

type Props = {
  title: string;
  header: string;
  text: string;
};

const BodyTextBox: FC<Props> = ({ title, header, text }) => {
  return (
    <div className="body-article-box">
      <span className="body-article-box-heading">{title}</span>
      <h3 className="body-article-box-title">{header}</h3>
      <p className="body-article-box-text">{text}</p>
    </div>
  );
};

export default BodyTextBox;
