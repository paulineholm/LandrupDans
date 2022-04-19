import { createGlobalStyle } from "styled-components";
import RacingSansOne from "../fonts/RacingSansOne-Regular.ttf";
import Roboto from "../fonts/Roboto-Regular.ttf";
import Ubuntu from "../fonts/Ubuntu-Regular.ttf";

const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family:'Ubuntu Regular';
}
@font-face {
    font-family: 'RacingSansOne Regular';
    src: url(${RacingSansOne})
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto Regular';
    src: url(${Roboto});
    font-style: normal;
  }
  @font-face {
    font-family: 'Ubuntu Regular';
    src: url(${Ubuntu});
    font-style: normal;
  }
:root{
    --light-grey: #EAEAEA;
    --deep-plum: #5E2E53;
    --dirty-pink: #E1A1E9;
    --deep-black: #000000;
    --basic: 18px;
    --medium: 24px;
    --big: 36px;
}
img{
    max-width:100%;
}
html{
    font-size: 18px;
    background-color: #5E2E53;
}
ul,li{
    list-style: none;
}
a{
    text-decoration: none;
}
`;
export default GlobalStyles;
