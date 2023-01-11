import { createGlobalStyle } from "styled-components";

import backgroundImage from "../assets/background.png";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    background-image: url(${backgroundImage});
    background-attachment: fixed;
  }

  * {
    color: #080D0E;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    box-sizing: border-box;
    font-size: 25px;
  }
`;

export default GlobalStyle;
