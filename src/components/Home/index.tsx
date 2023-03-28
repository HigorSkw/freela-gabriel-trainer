import HomePage from "./style";
import imagePerfil from "../../assets/example1.jpeg";

export const HomeSection = () => {
  return (
    <HomePage id="home">
      <div className="home-text">
        <h1>
          Eu sou Gabriel Varela <br />
          <span>Personal Trainer</span>
        </h1>
        <h4>Treinos Personalizados</h4>
        <a href="#about" className="btn-read">
          Leia mais!
          <br />
        </a>
        <ul className="count">
          <li>
            <span>50+</span> <br />
            Objetivos atingidos!
          </li>
          <li>
            <span>100+</span> <br />
            Premiações recebidas!
          </li>
          <li>
            <span>1000+</span> <br />
            Treinos personalizados!
          </li>
        </ul>
      </div>
    </HomePage>
  );
};
