import { styled } from "styled-components";

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const StyleIcon = (Icon) => styled(Icon)`
  color: ${({ theme }) => theme.colors.text.primaryText};
  height: auto;
  transition: 0.3s;
  width: 48px;

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
  margin-right: 24px;
  padding: 0;
`;
