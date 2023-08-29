import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme/theme";
import Profile from "./features/Profile";
import Skills from "./features/Skills";
import Portfolio from "./features/Portfolio";
import Footer from "./features/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Profile />
      <Skills />
      <Portfolio />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
