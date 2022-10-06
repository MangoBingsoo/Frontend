import * as S from "./style";
import * as I from "../../Asset";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import { useCallback, useState, MouseEvent, useEffect } from "react";
import { emotionImage } from "../../Asset/common/emotionImages";
import { theme } from "../../theme";

const Main: React.FC = () => {
  const [value, onChange] = useState(new Date());
  const [isClick, setIsClick] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const userArr = [
    { date: "2022-10-01", feeling: 0 },
    { date: "2022-10-02", feeling: 1 },
    { date: "2022-10-03", feeling: 2 },
    { date: "2022-10-04", feeling: 3 },
  ];

  const format = (data: any): any => {
    if (9 >= data) {
      return "0" + data;
    }
    return data;
  };

  const removeClick = useCallback((e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    getFeel();
  }, [value]);

  const [state, setState] = useState<any>(null);

  const getFeel = () => {
    const date =
      String(value.getFullYear()) +
      "-" +
      format(String(value.getMonth() + 1)) +
      "-" +
      format(String(value.getDate()));

    const arr = userArr.reduce((acc: any[], v) => [...acc, v.date], []);

    const index = arr.indexOf(date);

    if (index !== -1) {
      setSelectedIndex(userArr[index].feeling);
      console.log(userArr[index].feeling);

      if (0 === userArr[index].feeling) {
        setState(0);
      }
      if (1 === userArr[index].feeling) {
        setState(1);
      }
      if (2 === userArr[index].feeling) {
        setState(2);
      }
      if (3 === userArr[index].feeling) {
        setState(3);
      }
    }
    setState(null);
    return false;
  };

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
      <S.StyledCalendar onClick={removeClick} theme={theme}>
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
          <S.EmotionTextBoxWrapper>
            <S.EmotionText>
              <S.Text className="date">{value.getDate()}일,</S.Text>
              <S.Text>추혜연님의 기분을 들려주세요</S.Text>
            </S.EmotionText>
          </S.EmotionTextBoxWrapper>
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
                onClick={() => {
                  setSelectedIndex(0);
                }}
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
                onClick={() => {
                  setSelectedIndex(1);
                }}
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
                onClick={() => {
                  setSelectedIndex(2);
                }}
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
                onClick={() => {
                  setSelectedIndex(3);
                }}
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
