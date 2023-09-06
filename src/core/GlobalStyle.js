import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  width: 1216px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.background.siteBackground};
  box-sizing: border-box;
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 115px 0 109px 0;
  transition: background-color 0.3s;
  word-break: break-word;
}
`;

export default GlobalStyle;
