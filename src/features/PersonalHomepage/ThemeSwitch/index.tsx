import { Label, Wrapper } from "./styled";
import Button from "./Button";
import { themeProps } from "../../../common/theme/type";

const ThemeSwitch = ({ theme, setTheme }: themeProps) => {
  return (
    <Wrapper>
      <Label>Dark Theme {theme === "light" ? "on" : "off"} </Label>
      <Button theme={theme} setTheme={setTheme} />
    </Wrapper>
  );
};

export default ThemeSwitch;
