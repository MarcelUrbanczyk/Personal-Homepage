import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme/theme";
import PersonalHomepage from "./features/PersonalHomepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
