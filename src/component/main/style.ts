import styled from "styled-components";
import { theme } from "../../theme";

export const TextBox = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 700;
`;

export const NameText = styled.div``;

export const DateTextList = styled.ul`
  display: flex;
  list-style: none;
  gap: 6px;
`;

export const Text = styled.li`
  &.date {
    color: #de8282;
  }
`;
