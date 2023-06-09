import logo from "../../assets/logo.jpeg";
import { ImMenu } from "react-icons/im";
import HeaderStyled from "./style";
import { useState } from "react";

const mensagem =
  "Olá, venho através do seu site e gostaria de maiores informações...";
const mensagemCodificada = encodeURIComponent(mensagem);
const urlWhahts = `https://api.whatsapp.com/send?phone=5548996503731&text=${mensagemCodificada}`;

export const Header = (): JSX.Element => {
  const [active, setActive] = useState(false);

  return (
    <HeaderStyled>
      <a href="#home" className="header-logo">
        Gabriel <span>Varela</span>
      </a>
      <div className="bx bx-menu">
        <ImMenu id="menu-icon" onClick={() => setActive(!active)} />
      </div>

      {active ? (
        <ul className="navList active">
          <li onClick={() => setActive(!active)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setActive(!active)}>
            <a href="#about">Sobre</a>
          </li>
          <li onClick={() => setActive(!active)}>
            <a href="#services">Serviços</a>
          </li>
        </ul>
      ) : (
        <ul className="navList">
          <li onClick={() => setActive(!active)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setActive(!active)}>
            <a href="#about">Sobre</a>
          </li>
          <li onClick={() => setActive(!active)}>
            <a href="#services">Serviços</a>
          </li>
        </ul>
      )}
      <div className="h-btn">
        <a
          href="https://www.instagram.com/gabrielvarela.edf/"
          target="_blank"
          className="btn-insta"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href={urlWhahts}
          className="btn-whats"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </HeaderStyled>
  );
};

export default Header;
