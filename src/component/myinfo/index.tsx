import { theme } from "../../theme";
import * as S from "./style";
import arrow from "../../Asset/common/navbar/arrow.png";

interface Props {
  text: string;
  id: number;
}

const MyInfo = ({ text, id }: Props) => {
  return (
    <>
      <S._ProfileWrapper>
        <S._ProfileBox>
          <S._ProfileText>{text}</S._ProfileText>
          <S._IdText>ID :{id}</S._IdText>
        </S._ProfileBox>
      </S._ProfileWrapper>
      <S.WarmTextWrap>
        <S.WrapText backgroundColor={theme.secondary} textColor={theme.white}>
          오늘도 좋은 하루 되세요🥰
        </S.WrapText>
      </S.WarmTextWrap>
      <S.FunctionWrap>
        <S.FunctionLeftWrap>
          <S.SubText>에이레네 공지사항</S.SubText>
          <S.MainText>공지사항</S.MainText>
        </S.FunctionLeftWrap>
        <S.FunctionRightWrap>
          <S.ArrowImg src={arrow} />
        </S.FunctionRightWrap>
      </S.FunctionWrap>
      <S.SecondFunctionWrap>
        <S.FunctionLeftWrap>
          <S.SubText>기기 내 계정에서 로그아웃하기</S.SubText>
          <S.MainText>로그아웃</S.MainText>
        </S.FunctionLeftWrap>
        <S.FunctionRightWrap>
          <S.ArrowImg src={arrow} />
        </S.FunctionRightWrap>
      </S.SecondFunctionWrap>
    </>
  );
};

export default MyInfo;
