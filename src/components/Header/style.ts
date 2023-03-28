import styled from "styled-components";

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  right: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  padding: 15px 6%;

  .header-logo {
    font-size: 1.9rem;
    font-weight: 600;
    color: var(--color-text);

    span {
      color: var(--main-color);
      font-size: 1.8rem;
    }
  }

  .navList {
    display: flex;

    li {
      position: relative;
    }

    a {
      color: var(--color-text);
      font-weight: 500;
      font-size: 1rem;
      padding: 10px 20px;
    }

    a::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      background-color: var(--main-color);
      left: 0;
      bottom: -4px;
      transition: ease 0.4s;
    }

    a:hover::after {
      width: 100%;
    }
  }

  .bx-menu {
    svg {
      font-size: 26px;
      color: var(--color-text);
      cursor: pointer;
      z-index: 10001;
      display: none;
    }
  }

  .h-btn {
    a {
      color: var(--color-text);
      font-weight: 500;
      padding: 8px 26px;
      border: 2px solid transparent;
      transition: ease 0.4s;
    }

    .btn-insta {
      background-color: #dd4799;
      color: #fff;
      padding: 10px 20px;
      border-radius: 30px;
    }

    .btn-insta:hover {
      background-color: var(--main-color);
      color: #000;
      font-weight: 700;
    }

    .btn-whats {
      background-color: var(--main-color);
      color: #fff;
      padding: 10px 20px;
      border-radius: 30px;
      margin-right: 3px;
    }

    .btn-whats:hover {
      background-color: #dd4799;
      color: #000;
      font-weight: 700;
    }
  }
`;

export default HeaderStyled;
