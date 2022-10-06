import styled from "styled-components";

export const AuthForm = styled.div<{ backgroundColor: string }>`
  width: 414px;
  height: 896px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const AuthFormWrap = styled.div`
  margin-top: 750px;
  position: absolute;
  z-index: 99;
  opacity: 0;
`;

export const AuthLoginBtn = styled.div<{
  backgroundColor: string;
  textColor: string;
}>`
  width: 374px;
  height: 54px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  display: flex;
  align-items: center;
  margin-top: 750px;
  border-radius: 30px;
`;

export const AuthLoginImg = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 100px;
`;

export const AuthLoginText = styled.span`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 30px;
  font-weight: 700;
  font-size: 18px;
`;

export const LogoImg = styled.img`
  position: absolute;
  display: flex;
  top: 214px;
  left: 109px;
  width: 197px;
  height: 240px;
`;
