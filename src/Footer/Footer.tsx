import { FC } from "react";
import Logo from "../img/logo.jpg";
import {
  COMPANY,
  COMPANY_NAV_ITEMS,
  FOOTER_MARK,
  INFO,
  INFO_NAV_ITEMS,
  manualUrl,
  PRODUCT,
  PRODUCT_NAV_ITEMS,
} from "../TextBox/constants";
import FooterColumn from "./FooterColumn";
import SocialNetworks from "./SocialNetworks";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <a target="_blank" href={manualUrl}>
          <img alt="manual logo" src={Logo} />
        </a>
      </div>
      <div className="footer-items">
        <FooterColumn title={PRODUCT} items={PRODUCT_NAV_ITEMS} />
        <FooterColumn title={COMPANY} items={COMPANY_NAV_ITEMS} />
        <FooterColumn title={INFO} items={INFO_NAV_ITEMS} />
        <SocialNetworks />
      </div>
      <div className="footer-mark">
        <p className="footer-mark-text">{FOOTER_MARK}</p>
      </div>
    </footer>
  );
};

export default Footer;
