import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../common/theme/theme";
import PersonalHomepage from "../features/PersonalHomepage";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <PersonalHomepage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
