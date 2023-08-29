import { styled } from "styled-components";
import { ReactComponent as Envelope } from "./Envelope.svg";

export const EnvelopeIcon = styled(Envelope)`
  width: 24px;
  height: 24px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  display: inline-flex;
  padding: 12px 16px;
  gap: 16px;
  font-size: 20.058px;
  margin-top: 32px;
  font-family: "Inter";
`;
