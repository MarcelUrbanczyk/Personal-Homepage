import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  max-width: 1216px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.background.siteBackground};
  box-sizing: border-box;
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 110px 20px;
  transition: background-color 0.3s;
  word-break: break-word;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
  }
}
a{
  text-decoration: none;
}

`;

export default GlobalStyle;
