import { Label, Wrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectIsThemeDark } from "../../../common/theme/themeSlice";
import Button from "./Button";

const ThemeSwitch = () => {
  const isThemeDark = useSelector(selectIsThemeDark);
  return (
    <Wrapper>
      <Label>Dark Theme {isThemeDark ? "on" : "off"} </Label>
      <Button isThemeDark={isThemeDark} />
    </Wrapper>
  );
};

export default ThemeSwitch;
