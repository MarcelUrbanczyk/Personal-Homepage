import { Bullet, Sun, Switch, Label, Wrapper } from "./styled";

const ThemeSwitch = () => {
  const DarkMode = false;
  return (
    <Wrapper>
      <Label>Dark Theme {DarkMode === true ? "off" : "on"} </Label>
      <Switch $DarkMode={DarkMode} />
      <Bullet $DarkMode={DarkMode} />
      <Sun />
    </Wrapper>
  );
};

export default ThemeSwitch;
