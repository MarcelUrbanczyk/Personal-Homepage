import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 0 72px 0;
  padding: 32px;
`;

export const Divider = styled.hr`
  background: var(--diff-bg-neutral, rgba(209, 213, 218, 0.3));
  width: 1151px;
  height: 1px;
  flex-shrink: 0;
  border: none;
`;

export const Header = styled.div`
  color: var(--black-text, #252525);
`;

export const Body = styled.div`
  padding: 32px;
`;

export const HeaderText = styled.h2`
  margin: 0;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
`;
