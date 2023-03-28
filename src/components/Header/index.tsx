import logo from "../../assets/logo.jpeg";
import { ImMenu } from "react-icons/im";
import HeaderStyled from "./style";

const mensagem =
  "Olá, venho através do seu site e gostaria de maiores informações...";
const mensagemCodificada = encodeURIComponent(mensagem);
const urlWhahts = `https://wa.me/?text=${mensagemCodificada}`;

export const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <a href="#" className="header-logo">
        Gabriel <span>Varela</span>
      </a>
      <div className="bx bx-menu">
        <ImMenu />
      </div>
      <ul className="navList">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#contact">Contatos</a>
        </li>
      </ul>
      <div className="h-btn">
        <a
          href={urlWhahts}
          className="btn-whats"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <a
          href="https://www.instagram.com/gabrielvarela.edf/"
          target="_blank"
          className="btn-insta"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </HeaderStyled>
  );
};

export default Header;
