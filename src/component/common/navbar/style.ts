import styled from "styled-components";

export const _NavBarContainer = styled.div`
  width: 100%;
  height: 61px;
  position: relative;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const _PageTitleContainer = styled.h1`
  font-size: 22px;
  font-weight: 600;
`;
