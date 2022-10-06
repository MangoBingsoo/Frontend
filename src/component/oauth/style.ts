import styled from "styled-components";

export const AuthFormWrap = styled.div<{ backgroundColor: string }>`
  width: 414px;
  height: 896px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 150px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const AuthLoginBtnWrap = styled.div`
  display: flex;
`;
