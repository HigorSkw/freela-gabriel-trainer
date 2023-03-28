import FooterSection from "./style";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterSection>
      <div className="footer-text">
        <p>
          {" "}
          © 2023 all rights reserved - Design and Developer by: Higor Skowronski
          - @higorskw
        </p>
      </div>
      <div className="footer-icons">
        <a href="https://github.com/HigorSkw/">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/higorskw">
          <AiFillLinkedin />
        </a>
      </div>
    </FooterSection>
  );
};

export default Footer;
