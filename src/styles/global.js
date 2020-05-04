import { createGlobalStyle } from 'styled-components';
import 'react-popupbox/dist/react-popupbox.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100%;
  }

  body {
    background: #fcaeac;
    -webkit-font-smoothing: antialiased !important;

    div.popupbox-content {
      padding: 0;
    }
  }

  button {
    cursor: pointer;
  }
`;
