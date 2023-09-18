import styled from "styled-components";

export const Image = styled.img`
  width: 120%;
`;

export const Frame = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  width: 398px;
  height: 398px;
  overflow: hidden;
  margin-right: 66px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 180px;
    height: 180px;
  }
`;
