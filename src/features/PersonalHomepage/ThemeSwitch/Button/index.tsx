import { Switch, Bullet, Sun, StyledButton } from "./styled";
import { themeProps } from "../../../../common/theme/type";

const Button = ({ theme, setTheme }: themeProps) => {
  const handleThemeSwitch = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <StyledButton
      onClick={() => {
        handleThemeSwitch();
      }}
    >
      <Switch />
      <Bullet $moveToRight={theme !== "light"}>
        <Sun />
      </Bullet>
    </StyledButton>
  );
};

export default Button;
