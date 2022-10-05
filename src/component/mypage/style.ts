import styled from "styled-components";

export const _ProfileWrapper = styled.div`
  background-color: ${({ theme }) => theme.main};
  width: 100%;
  height: 230px;
  padding-left: 20px;
  position: relative;
`;

export const _ProfileBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 28px;
`;

export const _ProfileText = styled.p`
  font-size: 34px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
`;

export const _IdText = styled.p`
  height: fit-content;
  margin: auto 0 2px 12px;
  color: ${({ theme }) => theme.gray300};
  font-size: 16px;
`;
