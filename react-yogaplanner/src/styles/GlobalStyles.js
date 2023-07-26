import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #C57997;
    --secondary-color: #692D51;
    --accent-color: #858585;
    --black: #000000;
    --white: #ffffff;
    --light-grey: #eaeaea;
    
    --main-font: 'Roboto', sans-serif;
    --heading-font: 'Roboto', sans-serif;
    --base-font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--main-font);
    font-size: var(--base-font-size);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font);
    margin-bottom: 1rem;
  }

  h1 {
    font-size: calc(var(--base-font-size) * 2.618); /* Approximately 41.808rem */
  }
  
  h2 {
    font-size: calc(var(--base-font-size) * 1.618); /* Approximately 25.888rem */
  }
  
  h3 {
    font-size: calc(var(--base-font-size) * 1); /* The base font size (16px) */
  }
  
  h4 {
    font-size: calc(var(--base-font-size) * 0.618); /* Approximately 9.888rem */
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  li {
    display: inline-block;
    list-style: none;
    transition: all 0.3s ease-in-out;
    letter-spacing: 0.1rem;
  }

  li:hover {
    transform: scale(1.05);
  }

  button {
    padding: .7rem 1rem;
    font-size: .9rem;
    border: none;
    border-radius: 0.5rem;
    text-decoration: none;
    background-color: var(--primary-color);
    transition: all 0.3s ease-in-out;
    color: var(--white);
  }
  
  button:hover {
      cursor: pointer;
      background-color: var(--black);
      transform: scale(1.05);
  }

  img {
    max-width: 100%;
    border-radius: 1rem;
  }
  

`;

export default GlobalStyle;
