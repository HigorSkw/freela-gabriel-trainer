import styled from "styled-components";
import backround from "../../assets/background.jpg";

const HomePage = styled.main`
  padding: 120px 16%;

  height: 100vh;
  width: 100vw;
  background: url(${backround});
  background-size: cover;
  background-position: center;
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;

  .home-text {
    padding-top: 120px;

    h1 {
      font-size: var(--big-font);
      color: var(--text-color);
      line-height: 1.11;
      font-weight: 800;
      letter-spacing: 1px;
      margin: 0 0 25px;
    }

    span {
      color: var(--blue-medium);
    }

    h4 {
      color: var(--text-color);
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
      margin-top: 100px;
    }

    .count li {
      margin-right: 55px;
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-color);
    }

    .count span {
      color: var(--text-color);
      font-weight: 700;
      font-size: 1.8rem;
    }
  }

  @media (max-width: 1380px) {
    .home-text h4 {
      font-size: 1.2rem;
    }

    .count span {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 1120px) {
    height: 85vh;
  }

  @media (max-width: 630px) {
    .home-text {
      font-size: 1.2rem;
    }

    .count li {
      margin-bottom: 20px;
      font-size: 1rem;
    }
    .count span {
      font-size: 1.2rem;
    }
  }
`;

export default HomePage;
