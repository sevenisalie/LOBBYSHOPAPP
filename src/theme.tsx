import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --gutterSm: 0.4rem;
    --gutterMd: 0.8rem;
    --gutterLg: 1.6rem;
    --gutterXl: 2.4rem;
    --gutterXx: 7.2rem;
    --colorPrimary400: #7e57c2;
    --colorPrimary600: #5e35b1;
    --colorPrimary800: #4527a0;
    --fontFamily: "Dosis", sans-serif;
    --fontSizeSm: 1.2rem;
    --fontSizeMd: 1.6rem;
    --fontSizeLg: 2.1rem;
    --fontSizeXl: 2.8rem;
    --fontSizeXx: 3.6rem;
    --lineHeightSm: 1.1;
    --lineHeightMd: 1.8;
    --transitionDuration: 300ms;
    --transitionTF: cubic-bezier(0.645, 0.045, 0.355, 1);
    
    /* floated labels */
    --inputPaddingV: var(--gutterMd);
    --inputPaddingH: var(--gutterLg);
    --inputFontSize: var(--fontSizeLg);
    --inputLineHeight: var(--lineHeightMd);
    --labelScaleFactor: 0.8;
    --labelDefaultPosY: 50%;
    --labelTransformedPosY: calc(
      (var(--labelDefaultPosY)) - 
      (var(--inputPaddingV) * var(--labelScaleFactor)) - 
      (var(--inputFontSize) * var(--inputLineHeight))
    );
    --inputTransitionDuration: var(--transitionDuration);
    --inputTransitionTF: var(--transitionTF);
  }
  html,
  body {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    background-color: #DA130C;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    font-family: 'Ubuntu', sans-serif;
    height: auto;
    min-height: 100vh;
    width: 100vw;
    color: #242424;
    max-width: 100vw;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  
`;

export default GlobalStyle;