import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    background-color: #FAFAFA;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Open Sans;
    /* color: #707070; */
  }

  ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #c0c0c0;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a9a9a9;
  border-radius: 5px;
}
`;
