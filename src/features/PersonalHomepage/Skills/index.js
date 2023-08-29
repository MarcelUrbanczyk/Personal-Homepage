import { currentSkills, futureSkills } from "./skillset";
import Section from "./Section";
import List from "./List";

const Skills = () => (
  <>
    <Section
      title="My skillset includes 🛠️"
      content={<List skills={currentSkills} />}
    />
    <Section
      title="What I want to learn next 🚀"
      content={<List skills={futureSkills} />}
    />
  </>
);

export default Skills;
