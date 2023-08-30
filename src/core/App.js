import { ThemeProvider } from "styled-components";
import { theme } from "../common/theme/theme";
import PersonalHomepage from "../features/PersonalHomepage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersonalHomepage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
