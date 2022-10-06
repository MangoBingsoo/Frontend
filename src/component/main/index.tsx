import * as S from "./style";
import * as I from "../../Asset";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import { useEffect, useState } from "react";
import useMember from "../../hooks/user/useMember";

const Main: React.FC = () => {
  const [value, onChange] = useState(new Date());
  const [isClick, setSetClick] = useState<boolean>(false);

  const { user } = useMember();
  console.log(user);

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
        <Calendar
          calendarType="US"
          onChange={onChange}
          value={value}
          onClickDay={() => {
            setSetClick(true);
          }}
        />
      </S.StyledCalendar>
      {isClick ? (
        <S.EmotionWrapper>
          <S.EmotionTextBox>
            <S.EmotionText>
              <S.Text className="date">{value.getDate()}일, </S.Text>
              <S.Text>추혜연님의 기분을 들려주세요</S.Text>
            </S.EmotionText>
          </S.EmotionTextBox>
          <S.EmojiBoxWrapper>
            <S.EmojiBoxList>
              <S.EmojiBox>
                <S.Emoji
                  src="/images/happy.png"
                  alt="happy"
                  className="happy"
                />
              </S.EmojiBox>
              <S.EmojiBox>
                <S.Emoji src="/images/soso.png" alt="soso" className="soso" />
              </S.EmojiBox>
              <S.EmojiBox>
                <S.Emoji src="/images/sad.png" alt="sad" />
              </S.EmojiBox>
              <S.EmojiBox>
                <S.Emoji src="/images/angry.png" alt="angry" />
              </S.EmojiBox>
            </S.EmojiBoxList>
          </S.EmojiBoxWrapper>
        </S.EmotionWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

export default Main;
