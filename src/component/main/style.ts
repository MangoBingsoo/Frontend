import styled from "styled-components";

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

export const StyledCalendar = styled.div`
  width: 371px;
  margin: auto;
  padding-top: 40px;

  .react-calendar {
    width: 100%;
  }
`;
