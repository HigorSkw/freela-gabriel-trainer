import styled from "styled-components";
import backround from "../../assets/background.jpg";
import backround2 from "../../assets/bd.jpeg";
import backround3 from "../../assets/running1.jpeg";
import backround4 from "../../assets/running2.jpeg";
import backround5 from "../../assets/running3.jpeg";

const HomePage = styled.main`
  padding: 120px 16%;

  height: 100vh;
  width: 100vw;
  background: url(${backround3});
  background-size: cover;
  background-position: center;
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;

  .home-text {
    padding-top: 40px;

    h1 {
      font-size: var(--big-font);
      color: var(--blue-grey);
      line-height: 1.11;
      font-weight: 800;
      letter-spacing: 1px;
      margin: 0 0 25px;
    }

    span {
      color: var(--blue-medium);
      font-size: 1.4rem;
    }

    h4 {
      color: var(--blue-grey);
      font-size: 1.5rem;
      line-height: 1.21;
      font-weight: 700;
      margin-bottom: 40px;
    }

    .btn-read {
      display: inline-block;
      font-size: 14px;
      font-weight: 600;
      padding: 16px 33px;
      background: var(--main-color);
      color: var(--text-color);
      border-radius: 30px;
      border: 2px solid transparent;
      text-transform: uppercase;
      transition: ease 0.3s;
    }

    .btn-read:hover {
      transform: translateY(-10px);
      background: transparent;
      color: var(--main-color);
      border: 2px solid var(--main-color);
    }

    .count {
      display: flex;
      flex-wrap: wrap;

      li {
        margin-right: 55px;
        /* font-size: 1rem; */
        font-weight: 600;
        color: var(--blue-dark);
      }

      span {
        color: var(--blue-dark);
        font-weight: 700;
        font-size: 1.8rem;
      }
    }
  }

  @media (max-width: 1380px) {
    padding: 80px 2%;

    .home-text h4 {
      font-size: 1.2rem;
    }

    .count span {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 1120px) {
    .count {
      margin-top: 100px;
    }

    height: 85vh;
  }

  @media (max-width: 630px) {
    padding: 90px 4%;

    .home-text h4 {
      font-size: 1.2rem;
    }

    .count {
      margin-top: 30px;
    }
    .count li {
      margin-bottom: 20px;
      font-size: 0.7rem;
    }
    .count span {
      font-size: 1.2rem;
    }
  }

  @media (max-height: 390px) {
    .count {
      opacity: 0;
    }

    .btn-read {
      opacity: 0;
    }
  }
`;

export default HomePage;
