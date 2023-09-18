import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "./Envelope.svg";

export const Envelope = styled(EnvelopeIcon)`
  width: 24px;
  height: 24px;
`;

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 0 0 63px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-template-columns: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    margin: 0 0 48px 0;
  }
`;

export const ThisIs = styled.h2`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  font-size: 12px;
  line-height: 130%;
  margin-top: 68px;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    margin-top: 12px;
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.text.primaryText};
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 1.9px;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`;

export const Wrapper = styled.div`
  grid-column: 2;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-column: 1;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 35px 0 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    margin: 16px 0 0;
  }
`;
