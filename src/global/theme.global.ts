import { createGlobalStyle } from "styled-components";

export const StyledComponetsGlobalTheme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto;
  }

  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.25%;
  }

`