import styled from "styled-components";

const ServiceSection = styled.section`
  background: var(--second-color);

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

  .services-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(370px, auto));
    grid-gap: 2rem;
    align-items: center;
    margin-top: 4.4rem;

    .box {
      background: var(--bg-color);
      padding: 45px 30px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.45s;

      svg {
        color: var(--main-color);
        font-size: 2.8rem;
        margin-bottom: 18px;
      }

      h3 {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 15px;
        color: var(--second-color);
      }

      p {
        color: var(--other-color);
        font-size: 16px;
        line-height: 30px;
      }
    }

    .box:hover {
      box-shadow: 0px 5px 5px white;
    }
  }
`;

export default ServiceSection;
