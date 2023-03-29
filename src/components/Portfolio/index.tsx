import PortfolioSection from "./style";
import adventure from "../../assets/adventure.jpeg";
import running from "../../assets/running2.jpeg";
import personal from "../../assets/bd2.jpeg";

export const Portfolio = (): JSX.Element => {
  return (
    <PortfolioSection>
      <div className="heading">
        <h6>Criando Momentos!</h6>
        <h2>Experiências que posso te proporcionar!</h2>
        <p>
          Conheça lugares lindos!! Explore a natureza da Grande Florianópolis
          comigo!
        </p>
      </div>

      <div className="portfolio-content">
        <div className="col">
          <h4>Trilhas</h4>
          <br />
          <img src={adventure} alt="" />
          <div className="layer">
            <h3>Trilha Lagoinha do Leste</h3>
          </div>
        </div>
        <div className="col">
          <h4>Corridas</h4>
          <br />
          <img src={running} alt="" />
          <div className="layer">
            <h3>Prova Corrida 10km</h3>
          </div>
        </div>
        <div className="col">
          <h4>Personal</h4>
          <br />
          <img src={personal} alt="" />
          <div className="layer">
            <h3>Personal Trainer!</h3>
          </div>
        </div>
      </div>
    </PortfolioSection>
  );
};
