import PortfolioSection from "./style";
import image1 from "../../assets/example1.jpeg";

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
          <img src={image1} alt="" />
          <div className="layer">
            <h3>Trilha do Santinho</h3>
          </div>
        </div>
        <div className="col">
          <img src={image1} alt="" />
          <div className="layer">
            <h3>Trilha do Pedra Branca</h3>
          </div>
        </div>
        <div className="col">
          <img src={image1} alt="" />
          <div className="layer">
            <h3>Trilha da Guarda</h3>
          </div>
        </div>
      </div>
    </PortfolioSection>
  );
};
