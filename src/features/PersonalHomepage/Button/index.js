import { StyledButton } from "./styled";

const Button = ({ icon, text }) => (
  <StyledButton>
    {icon} {text}
  </StyledButton>
);

export default Button;
