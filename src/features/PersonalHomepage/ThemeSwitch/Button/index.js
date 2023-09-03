import { Switch, Bullet, Sun, StyledButton } from "./styled";

const Button = ({ isThemeDark }) => (
  <StyledButton>
    <Switch>
      <Bullet>
        <Sun />
      </Bullet>
    </Switch>
  </StyledButton>
);

export default Button;
