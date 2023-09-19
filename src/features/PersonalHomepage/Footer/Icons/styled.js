import { styled } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const StyleIcon = (Icon) => styled(Icon)`
  height: auto;
  width: 48px;
  color: ${({ theme }) => theme.colors.text.primaryText};
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 32px;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.text.primaryBlue};
    cursor: pointer;
  }
`;

export const Item = styled.li`
  margin: 0;
  padding: 0;
  margin-right: 24px;
`;
