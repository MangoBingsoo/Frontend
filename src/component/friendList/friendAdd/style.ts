import styled from "styled-components";

export const _FriendAddContainer = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export const _InputWrapper = styled.div`
  width: 100%;
  display: block;
  margin-top: 32px;
`;

export const _Label = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 4px;
`;

export const _InputBox = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray500};
  padding: 12px;
  font-size: 16px;
  outline: none;
  width: 100%;
  :focus {
    border-bottom: 1.5px solid ${({ theme }) => theme.main};
  }
  ::placeholder {
    color: ${({ theme }) => theme.grey500};
  }
`;

export const _ButtonContainer = styled.div<{
  disable: boolean;
}>`
  background-color: ${({ theme }) => theme.main};
  width: 100%;
  height: 49px;
  padding: 0 20px;
  align-items: center;
  border-radius: 8px;
  opacity: ${({ disable }) => (disable ? 0.5 : 1)};
  display: flex;
  justify-content: center;
  margin-top: 48px;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  :active {
    opacity: 0.5;
  }
`;
