import { DetailedHTMLProps, FC, useState } from "react";
import backgroundImg from "../img/BG.png";
import transparentImg from "../img/header_nobg.png";
import "../App.scss";
import HeaderTextBox from "../TextBox/HeaderTextBox";
import LogoImage from "../img/Symbol.png";
import { manualUrl } from "../TextBox/constants";

type Props = {
  openQuizHandler: () => void;
} & DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const Header: FC<Props> = ({ openQuizHandler, ...props }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const maxPhoneWidthPX = 765;

  window.addEventListener("resize", function () {
    setWindowWidth(window.innerWidth);
  });

  return (
    <header {...props} className="banner">
      <div className="logo">
        <a target="_blank" href={manualUrl}>
          <img alt="manual logo" src={LogoImage} />
        </a>
      </div>
      <HeaderTextBox openQuizHandler={openQuizHandler} />
      <div className="banner-image">
        {windowWidth <= maxPhoneWidthPX ? (
          <img
            className="banner-person"
            alt="grateful person"
            src={transparentImg}
          />
        ) : (
          <img
            className="banner-person"
            alt="grateful person"
            src={backgroundImg}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
