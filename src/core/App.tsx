import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../common/theme/theme";
import PersonalHomepage from "../features/PersonalHomepage";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";
import { themeState } from "../common/theme/type";

function App() {
  const [theme, setTheme] = useState<themeState>("light");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <PersonalHomepage theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
