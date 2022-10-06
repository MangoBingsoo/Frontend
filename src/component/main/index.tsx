import * as S from "./style";
import * as I from "../../Asset";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import useMember from "../../hooks/user/useMember";
import { useCallback, useEffect, useState, MouseEvent } from "react";
import { emotionImage } from "../../Asset/common/emotionImages";

const Main: React.FC = () => {
  const [value, onChange] = useState(new Date());
  const [isClick, setIsClick] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const removeClick = useCallback((e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  }, []);

  const { user } = useMember();
  console.log(user);

  return (
    <div onClick={() => setIsClick(false)} style={{ height: "100vh" }}>
      <S.TextBox>
        <S.NameText>추혜연님의</S.NameText>
        <S.DateTextList>
          <S.Text>예상 생리 시작일이</S.Text>
          <S.Text className="date">13일</S.Text>
          <S.Text>남았습니다.</S.Text>
        </S.DateTextList>
      </S.TextBox>
      <S.StyledCalendar onClick={removeClick}>
        <Calendar
          calendarType="US"
          onChange={onChange}
          value={value}
          onClickDay={() => {
            setIsClick(true);
            setSelectedIndex(null);
          }}
        />
      </S.StyledCalendar>
      {isClick ? (
        <S.EmotionWrapper onClick={removeClick}>
          <S.EmotionTextBox>
            <S.EmotionText>
              <S.Text className="date">{value.getDate()}일, </S.Text>
              <S.Text>추혜연님의 기분을 들려주세요</S.Text>
            </S.EmotionText>
          </S.EmotionTextBox>
          <S.EmojiBoxWrapper>
            <S.EmojiBoxList>
              <S.EmojiBox
                style={
                  selectedIndex === 0
                    ? {
                        background: "#DE8282",
                        borderRadius: "10px",
                        color: "#ffffff",
                      }
                    : {}
                }
                onClick={() => setSelectedIndex(0)}
              >
                <S.EmojiImg src={emotionImage("happy")} />
                <S.EmojiText>좋아요</S.EmojiText>
              </S.EmojiBox>
              <S.EmojiBox
                style={
                  selectedIndex === 1
                    ? {
                        background: "#DE8282",
                        borderRadius: "10px",
                        color: "#ffffff",
                      }
                    : {}
                }
                onClick={() => setSelectedIndex(1)}
              >
                <S.EmojiImg src={emotionImage("nomal")} />
                <S.EmojiText>그저그래요</S.EmojiText>
              </S.EmojiBox>
              <S.EmojiBox
                style={
                  selectedIndex === 2
                    ? {
                        background: "#DE8282",
                        borderRadius: "10px",
                        color: "#ffffff",
                      }
                    : {}
                }
                onClick={() => setSelectedIndex(2)}
              >
                <S.EmojiImg src={emotionImage("sad")} />
                <S.EmojiText>우울해요</S.EmojiText>
              </S.EmojiBox>
              <S.EmojiBox
                style={
                  selectedIndex === 3
                    ? {
                        background: "#DE8282",
                        borderRadius: "10px",
                        color: "#ffffff",
                      }
                    : {}
                }
                onClick={() => setSelectedIndex(3)}
              >
                <S.EmojiImg src={emotionImage("sensitive")} />
                <S.EmojiText>예민해요</S.EmojiText>
              </S.EmojiBox>
            </S.EmojiBoxList>
          </S.EmojiBoxWrapper>
        </S.EmotionWrapper>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
