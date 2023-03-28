import { FooterSection, LogoSection } from "./style";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import logoGabriel from "../../assets/logo.jpeg";

const Footer = () => {
  return (
    <>
      <LogoSection>
        <img src={logoGabriel} alt="LogoGabriel" />
      </LogoSection>
      <FooterSection>
        <div className="footer-text">
          <p>
            {" "}
            © 2023 all rights reserved - Design and Developer by: Higor
            Skowronski - @higorskw
          </p>
        </div>
        <div className="footer-icons">
          <a
            href="https://github.com/HigorSkw/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/higorskw"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </FooterSection>
    </>
  );
};

export default Footer;
