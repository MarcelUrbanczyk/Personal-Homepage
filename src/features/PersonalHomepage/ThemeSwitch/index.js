import { Label, Wrapper } from "./styled";
import { selectThemeState } from "../../../common/theme/themeSlice";
import { useSelector } from "react-redux";
import Button from "./Button";

const ThemeSwitch = () => {
  const theme = useSelector(selectThemeState);
  return (
    <Wrapper>
      <Label>Dark Theme {theme === "light" ? "on" : "off"} </Label>
      <Button theme={theme} />
    </Wrapper>
  );
};

export default ThemeSwitch;
