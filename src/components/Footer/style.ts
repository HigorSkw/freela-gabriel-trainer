import styled from "styled-components";

export const FooterSection = styled.footer`
  background: var(--second-color);
  padding: 20px 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 14px;
    font-weight: 500;
    color: var(--other-color);
    margin-bottom: 20px;
  }

  .footer-icons {
    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--main-color);
      width: 35px;
      height: 35px;
      margin: 0 5px;
      color: var(--text-color);
      font-size: 1.2rem;
      border-radius: 50%;
      transition: all 0.55s;
    }
  }

  .footer-icons a:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 630px) {
    p {
      margin-bottom: 30px;
    }
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 10rem;
  width: 100%;

  background: #041f2e;
  margin-top: 1rem;
  height: 14rem;

  img {
    width: 350px;
  }

  @media (max-width: 770px) {
    margin-bottom: 30px;
  }
`;
