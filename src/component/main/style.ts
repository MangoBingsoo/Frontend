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

export const EmotionWrapper = styled.div`
  width: 373px;
  height: 164px;
  background: #de828233;
  margin: auto;
  margin-top: 60px;
  justify-content: center;
`;

export const EmotionTextBox = styled.div`
  display: flex;
  height: 70px;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const EmotionText = styled.ul`
  display: flex;
  list-style: none;
  gap: 6px;
  font-weight: 500;
`;

export const EmojiBoxWrapper = styled.div`
  width: 328px;
  height: 64px;
`;

export const EmojiBoxList = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  justify-content: center;
`;

export const EmojiBox = styled.li`
  width: 52px;
  height: 64px;
`;

export const Emoji = styled.img`
  width: 100%;
  height: 100%;

  &.happy {
    width: 83%;
  }

  &.soso {
    width: 135%;
  }
`;
