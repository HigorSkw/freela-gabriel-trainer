import imagegabriel from "../../assets/example1.jpeg";
import AboutStyled from "./style";

export const About = (): JSX.Element => {
  return (
    <AboutStyled>
      <div className="about-img">
        <img src={imagegabriel} alt="#" />
        <h1>Alguma coisa</h1>
      </div>

      <div className="about-text">
        <h2>Sobre mim</h2>
        <h5>
          Personal <span>Trainer</span>{" "}
        </h5>
        <p>
          Sou um personal trainer apaixonado por esportes e atividades ao ar
          livre. Além de jogar vôlei, gosto de criar treinos personalizados para
          academias e ajudar meus clientes a alcançar seus objetivos de saúde e
          fitness. Nas horas vagas, pratico trilhas e sou o guia para os amigos
          que querem se aventurar pela natureza. Também sou corredor e já
          conquistei diversas premiações nas minhas corridas.{" "}
        </p>
      </div>
    </AboutStyled>
  );
};