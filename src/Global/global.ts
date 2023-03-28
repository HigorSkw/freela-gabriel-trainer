import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Roboto&display=swap');

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Dancing Script', cursive;
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;    
    list-style: none;
    text-decoration: none;
  }

  :root {
    --blue-dark: #011C26;
    --blue-medium: #025159;
    --blue-light: #1AD9D9;
    --blue-grey: #1B8C8C;
    --blue-grey-light: #18D9C5;
    --gray-medium: #415a77;
    --gray-light: #e0e1dd;
    --white: #fff;
    --gray: #444;

    --bg-color: #011c26;
    --secound-bg-color: #25159;
    --text-color: #fff;
    --secound-color: #161616;
    --main-color: var(--blue-medium);
    --other-color: #6a6a6a;
    --big-font: 4rem;
    --h2-font: 3.8rem;
    --p-font: 1rem;
  };

  body,html{
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    background-color: var(--bg-color);
    color: var(--white);
    }


  body {
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, textarea {
    font-family: 'Poppins';
  }
  button {
    text-align: center;
    cursor: pointer;
  }

  section {
    padding: 120px 16%;
  }

  * {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: var(--purple);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--gray-medium);
  border-radius: 20px;
  border: 1px solid var(--blue-medium);
}
`;
