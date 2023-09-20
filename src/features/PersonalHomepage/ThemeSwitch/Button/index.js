import { Switch, Bullet, Sun, StyledButton } from "./styled";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../../../common/theme/themeSlice";

const Button = ({ theme }) => {
  const dispatch = useDispatch();
  return (
    <StyledButton onClick={() => dispatch(switchTheme())}>
      <Switch />
      <Bullet movetoright={theme !== "light"}>
        <Sun />
      </Bullet>
    </StyledButton>
  );
};

export default Button;
