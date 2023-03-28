import styled from "styled-components";

const PortfolioSection = styled.section`
  .portfolio-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    grid-gap: 2rem;
    align-items: center;
    margin-top: 4.4rem;
    text-align: center;
    cursor: pointer;
  }

  .heading {
    text-align: center;

    h6 {
      font-size: 16px;
      font-weight: 600;
      color: var(--main-color);
      margin-bottom: 15px;
      line-height: 1;
    }

    h2 {
      font-size: var(--h2-font);
      color: var(--second-color);
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 1.6rem;
    }

    p {
      font-size: var(--p-font);
      font-weight: 400;
      line-height: 1.8;
      color: var(--other-color);
    }
  }

  .col {
    position: relative;

    img {
      max-width: 100%;
      width: 620px;
      height: auto;
    }
  }

  .layer {
    background: transparent;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 10px;
    top: 0;
    left: 0;
    transition: all 0.35s;

    h3 {
      position: absolute;
      width: 100%;
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--text-color);
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: all 0.35s;
    }
  }

  .layer:hover {
    background: linear-gradient(rgba(22, 22, 22, 0.06) 0%, #9f0036 100%);
  }

  .layer:hover h3 {
    bottom: 49%;
    opacity: 1;
  }
`;

export default PortfolioSection;
