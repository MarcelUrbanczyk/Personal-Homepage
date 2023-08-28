import { ThemeProvider } from "styled-components";
import { theme } from "./features/theme/theme";
import Profile from "./features/Profile";
import Section from "./common/Section";
import SkillList from "./features/Skills";
import { futureSkills, currentSkills } from "./features/Skills/skillset";
import Portfolio from "./features/Portfolio";
import Footer from "./features/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Profile />
      <Section
        title="My skillset includes 🛠️"
        content={<SkillList skills={currentSkills} />}
      />
      <Section
        title="What I want to learn next 🚀"
        content={<SkillList skills={futureSkills} />}
      />
      <Portfolio />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
