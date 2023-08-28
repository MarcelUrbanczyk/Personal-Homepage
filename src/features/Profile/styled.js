import styled from "styled-components";
import { ReactComponent as Message } from "../../assets/Message.svg";

export const MailIcon = styled(Message)`
  width: 24px;
  height: 24px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 115px 0 63px 0;
`;

export const ThisIs = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  line-height: 130%;
  margin-top: 68px;
  text-transform: uppercase;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-family: Inter;
  font-size: 38px;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.9px;
  margin: 0;
`;

export const Wrapper = styled.div`
  grid-column: 2;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 35px 0 0;
`;

export const HireButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  display: inline-flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-size: 20.058px;
  font-family: "Inter";
  margin-top: 32px;
`;
