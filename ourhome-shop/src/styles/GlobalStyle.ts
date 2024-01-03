import { createGlobalStyle } from "styled-components";
import theme from "~/styles/theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 600;
    src: url("/assets/fonts/NotoSansKR-Bold.ttf") format("ttf");
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    src: url("/assets/fonts/NotoSansKR-Regular.ttf") format("ttf");
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    color: ${theme.color.BLACK}
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input,
  select,
  textarea,
  ul,
  
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    outline: none;
    color: ${theme.color.BLACK};
  }

  a:hover, a:active, a:visited {
    text-decoration: none;
  }

  input:disabled {
    background: none;
    cursor: not-allowed;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }
  
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,

  *.hidden {
    position: absolute;
    overflow: hidden;
  }
`;

export default GlobalStyle;
