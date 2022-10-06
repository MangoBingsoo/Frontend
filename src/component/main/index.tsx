import * as S from "./style";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import

const Main: React.FC = () => {
  return (
    <>
      <S.TextBox>
        <S.NameText>추혜연님의</S.NameText>
        <S.DateTextList>
          <S.Text>예상 생리 시작일이</S.Text>
          <S.Text className="date">13일</S.Text>
          <S.Text>남았습니다.</S.Text>
        </S.DateTextList>
      </S.TextBox>
      <S.StyledCalendar>
        <Calendar />
      </S.StyledCalendar>
      <S.EmotionWrapper>
        <S.EmotionTextBox>
          <S.EmotionText>
            <S.Text className="date">7일,</S.Text>
            <S.Text>추혜연님의 기분을 들려주세요</S.Text>
          </S.EmotionText>
        </S.EmotionTextBox>
        <S.EmojiBox />
        <S.EmojiTextBox />
      </S.EmotionWrapper>
    </>
  );
};

export default Main;
