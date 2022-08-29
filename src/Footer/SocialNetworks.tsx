import { FC } from "react";
import Facebook from "../img/facebook.png";
import Twitter from "../img/twitter.png";
import Google from "../img/google.png";
import { FOLLOW_US } from "../TextBox/constants";

const SocialNetworks: FC = () => {
  return (
    <div className="footer-column">
      <h3 className="footer-column-title">{FOLLOW_US}</h3>
      <div className="footer-column-social">
        <a target="_blank" href="https://www.facebook.com">
          <img alt="facebook logo" src={Facebook} />
        </a>
        <a target="_blank" href="https://www.google.com">
          <img alt="google logo" src={Google} />
        </a>
        <a target="_blank" href="https://www.twitter.com">
          <img alt="twitter logo" src={Twitter} />
        </a>
      </div>
    </div>
  );
};

export default SocialNetworks;
