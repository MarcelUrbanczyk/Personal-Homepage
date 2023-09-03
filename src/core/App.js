import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../common/theme/theme";
import PersonalHomepage from "../features/PersonalHomepage";
import GlobalStyle from "./GlobalStyle";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectIsThemeDark } from "../common/theme/themeSlice";

function App() {
  const isThemeDark = useSelector(selectIsThemeDark);
  return (
    <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
