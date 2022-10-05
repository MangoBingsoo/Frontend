import * as S from "./style";

interface Props {
  text: string;
  id: number;
}

const MyPage = ({ text, id }: Props) => {
  return (
    <>
      <S._ProfileWrapper>
        <S._ProfileBox>
          <S._ProfileText>{text}</S._ProfileText>
          <S._IdText>ID :{id}</S._IdText>
        </S._ProfileBox>
      </S._ProfileWrapper>
    </>
  );
};

export default MyPage;
