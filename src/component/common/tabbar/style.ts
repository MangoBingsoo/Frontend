import styled from "styled-components";

export const TabbarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 49px;
  justify-content: center;
`;

export const TabbarList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  align-items: center;
  gap: 70px;
`;

export const ListElement = styled.li`
  cursor: pointer;
  z-index: 10;
`;

export const StyledSvg = styled.div`
  fill: red;
`;
