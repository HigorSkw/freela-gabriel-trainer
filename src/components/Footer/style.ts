import styled from "styled-components";

const FooterSection = styled.footer`
  background: var(--second-color);
  padding: 20px 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    font-weight: 500;
    color: var(--other-color);
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
`;

export default FooterSection;
