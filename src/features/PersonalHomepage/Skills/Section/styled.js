import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.background.boxBackground};
  box-shadow: ${({ theme }) => theme.boxshadow};
  margin: 0 0 72px 0;
  padding: 32px;
`;

export const Divider = styled.hr`
  background: ${({ theme }) => theme.colors.divider};
  width: 1151px;
  height: 1px;
  border: none;
`;

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.text.primaryText};
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.5px;
`;

export const Content = styled.div`
  padding: 0px;
`;
