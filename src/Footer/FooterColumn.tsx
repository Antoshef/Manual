import { FC } from "react";
import { FooterNavType } from "../models/models";

type Props = {
  title: string;
  items: FooterNavType[];
};

const FooterColumn: FC<Props> = ({ title, items }) => {
  return (
    <div className="footer-column">
      <h3 className="footer-column-title">{title}</h3>
      <nav>
        <ul>
          {items.map(({ text, ref }, index) => (
            <li key={text + index}>
              <a target="_blank" href={ref}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterColumn;
