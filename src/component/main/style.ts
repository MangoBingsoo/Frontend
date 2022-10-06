import styled from "styled-components";

export const TextBox = styled.div`
  margin-top: 70px;
  margin-left: 25px;
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

export const StyledCalendar = styled.div<{ theme: any }>`
  width: 371px;
  margin: auto;
  padding-top: 40px;

  .react-calendar {
    width: 100%;
  }

  .react-calendar__month-view__days {
    > .react-calendar__tile--now {
      :enabled {
        border-radius: 40px;
        background-color: ${({ theme }) => theme.gray300};
      }
    }
    > .react-calendar__tile--active {
      border-radius: 40px;
      background-color: ${({ theme }) => theme.main};
    }
  }
`;

export const EmotionWrapper = styled.div`
  width: 373px;
  height: 164px;
  background: #de828233;
  margin: auto;
  margin-top: 60px;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const EmotionTextBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 20px;
`;
export const EmotionText = styled.ul`
  display: flex;
  list-style: none;
  gap: 6px;
  font-weight: 500;
`;

export const EmojiBoxWrapper = styled.div`
  width: 95%;
`;

export const EmojiBoxList = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-between;
`;

export const EmojiBox = styled.div`
  justify-content: center;
  text-align: center;
  padding: 10px;
  color: #8d8d8d;
`;

export const EmojiImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const EmojiText = styled.div`
  text-align: center;
`;
