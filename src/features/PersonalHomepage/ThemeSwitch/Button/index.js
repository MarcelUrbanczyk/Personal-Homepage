import { Switch, Bullet, Sun, StyledButton } from "./styled";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../../../common/theme/themeSlice";

const Button = ({ isThemeDark }) => {
  const dispatch = useDispatch();
  return (
    <StyledButton onClick={() => dispatch(switchTheme())}>
      <Switch />
      <Bullet movetoright={isThemeDark}>
        <Sun />
      </Bullet>
    </StyledButton>
  );
};

export default Button;
