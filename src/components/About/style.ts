import styled from "styled-components";

const AboutStyled = styled.section`
  background: var(--bg-color);
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  align-items: center;
  grid-gap: 2rem;

  .about-img img {
    max-width: 100%;
    width: 490px;
    height: auto;
  }

  .about-text h2 {
    font-size: var(--h2-font);
    color: var(--second-color);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.2rem;
  }

  .about-text h5 {
    color: var(--second-color);
    font-size: 1.3rem;
    margin-bottom: 20px;
    letter-spacing: 2px;
  }

  .about-text p {
    font-size: var(--p-font);
    font-weight: 400;
    max-width: 570px;
    line-height: 1.8;
    color: var(--blue-light);
    margin-bottom: 2.5rem;
  }
`;

export default AboutStyled;
