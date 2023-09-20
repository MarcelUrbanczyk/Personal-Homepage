import styled from "styled-components";

export const Frame = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 398px;
  justify-content: center;
  margin-right: 66px;
  overflow: hidden;
  width: 398px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    height: 180px;
    width: 180px;
  }
`;

export const Image = styled.img`
  width: 120%;
`;
