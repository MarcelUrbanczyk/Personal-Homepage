import { styled } from "styled-components";

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  margin: 5px 12px 5px 0;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`;
