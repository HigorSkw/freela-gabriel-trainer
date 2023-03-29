import PortfolioSection from "./style";
import running1 from "../../assets/running1.jpeg";
import running2 from "../../assets/running2.jpeg";
import running3 from "../../assets/running3.jpeg";

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
          <img src={running1} alt="" />
          <div className="layer">
            <h3>Acredite</h3>
          </div>
        </div>
        <div className="col">
          <img src={running2} alt="" />
          <div className="layer">
            <h3>no seu</h3>
          </div>
        </div>
        <div className="col">
          <img src={running3} alt="" />
          <div className="layer">
            <h3>Potencial!</h3>
          </div>
        </div>
      </div>
    </PortfolioSection>
  );
};
