import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background.siteBackground};
    box-sizing: border-box;
    font-family: "Inter";
    margin: auto;
    max-width: 1216px;
    padding: 110px 20px;
    transition: background-color 0.3s;
    word-break: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 20px;
    }
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
