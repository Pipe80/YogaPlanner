import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #C57997;
    --secondary-color: #692D51;
    --accent-color: #858585;
    --black: #000000;
    --white: #ffffff;
    --dark-grey: #333333;
    --light-grey: #eaeaea;
    --login-box: #ffffff52;
    
    --main-font: 'Poppins', sans-serif; /* Changed the main font to Poppins */
    --heading-font: 'Poppins', sans-serif; /* Changed the heading font to Poppins */
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
    margin-bottom: .5rem;
  }

  p {
    font-family: var(--main-font);
    font-size: 1rem; /* The base font size */
  }

  h1 {
    font-size: 4.209rem; /* Approximately 67.34px */
  }
  
  h2 {
    font-size: 3.157rem; /* Approximately 50.52px */
  }
  
  h3 {
    font-size: 2.369rem; /* Approximately 37.90px */
  }
  
  h4 {
    font-size: 1.777rem; /* Approximately 28.43px */
  }
  
  h5 {
    font-size: 1.333rem; /* Approximately 21.33px */
  }

  h6 {
    font-size: 1rem; /* Same as the base font size (16.00px) */
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
    color: var(--white);
    background-color: var(--accent-color);
    transform: scale(1.05);
  }

  img {
    max-width: 100%;
    border-radius: 1rem;
  }

  input {
    border: none;
    width: 100%;
  }
`;

export default GlobalStyle;
