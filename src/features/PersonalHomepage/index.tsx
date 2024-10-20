import Header from "./Header";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import ThemeSwitch from "./ThemeSwitch";
import { themeProps } from "../../common/theme/type";

const PersonalHomepage = ({ setTheme, theme }: themeProps) => (
  <>
    <ThemeSwitch theme={theme} setTheme={setTheme} />
    <Header />
    <Skills />
    <Portfolio />
    <Footer />
  </>
);

export default PersonalHomepage;
