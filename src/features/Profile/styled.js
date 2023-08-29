import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 0 0 63px 0;
`;

export const ThisIs = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  line-height: 130%;
  margin-top: 68px;
  text-transform: uppercase;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 1.9px;
  margin: 0;
`;

export const Wrapper = styled.div`
  grid-column: 2;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 35px 0 0;
`;
