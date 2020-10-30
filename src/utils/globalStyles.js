import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export default createGlobalStyle`
  @font-face {
      font-family: mont;
      src: url("../assets/fonts/Montserrat-Regular.ttf") format('ttf');
  }
  @font-face {
      font-family: calibri;
      src: url("./assets/fonts/Calibri400.ttf") format('ttf');
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: ${colors.grey};
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: ${colors.black};
    font-size: 14px;
    font-family: calibri;
  }
  button {
    cursor: pointer;
  }
`
