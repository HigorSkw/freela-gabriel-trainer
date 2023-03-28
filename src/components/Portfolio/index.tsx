import PortfolioSection from "./style";
import image1 from "../../assets/example1.jpeg";
import image2 from "../../assets/example2.jpeg";

export const Portfolio = (): JSX.Element => {
  return (
    <PortfolioSection>
      <div className="heading">
        <h6>Criando Momentos!</h6>
        <h2>Experiências que posso oferecer para você!</h2>
        <p>
          Tenha a experiência de um profissional dedicado e aplicado para ajudar
          a alcançar os seus objetivos!
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
