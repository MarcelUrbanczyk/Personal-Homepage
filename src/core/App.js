import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../common/theme/theme";
import PersonalHomepage from "../features/PersonalHomepage";
import GlobalStyle from "./GlobalStyle";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectThemeState } from "../common/theme/themeSlice";

function App() {
  const theme = useSelector(selectThemeState);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
