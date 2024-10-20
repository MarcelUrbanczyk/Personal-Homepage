import { StyledButton } from "./styled";

interface ButtonProps {
  icon?: any;
  text: string;
}

const Button = ({ icon, text }: ButtonProps) => (
  <StyledButton>
    {icon} {text}
  </StyledButton>
);

export default Button;
