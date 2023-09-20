import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.background.boxBackground};
  box-shadow: ${({ theme }) => theme.boxshadow};
  margin: 0 0 72px 0;
  padding: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    margin: 0 0 50px 0;
  }
`;

export const Content = styled.div`
  padding: 0;
`;

export const Divider = styled.hr`
  background: ${({ theme }) => theme.colors.divider};
  border: none;
  height: 1px;
  width: 100%;
`;

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.text.primaryText};
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 26px;
  }
`;
