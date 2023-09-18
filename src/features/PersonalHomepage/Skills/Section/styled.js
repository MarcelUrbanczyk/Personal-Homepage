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

export const Divider = styled.hr`
  background: ${({ theme }) => theme.colors.divider};
  width: 100%;
  height: 1px;
  border: none;
`;

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.text.primaryText};
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.5px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 26px;
  }
`;

export const Content = styled.div`
  padding: 0px;
`;
