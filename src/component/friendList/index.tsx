import * as S from "./style";
import {
  FriendCardMain,
  FriendCardSecondary,
  FriendCardGray,
} from "./FriendCard";
import { useLocation, useNavigate } from "react-router-dom";

const FriendList = () => {
  const navigate = useNavigate();
  const location = useLocation().state as any;
  console.log(location);

  return (
    <S._FriendListContainer>
      <S._MainTextBox color="black" highlightColor="main">
        지금 <i>생리 중</i>인 친구
      </S._MainTextBox>
      <S.Row>
        <FriendCardMain
          name="김기영"
          period="생리 1일차"
          emotionType="sensitive"
        />
        <FriendCardMain name="김의찬" period="생리 5일차" emotionType="nomal" />
      </S.Row>
      <S.Row>
        <FriendCardMain name="이정윤" period="생리 1주차" emotionType="sad" />
      </S.Row>
      <S._MainTextBox color="black" highlightColor="secondary">
        <i>생리 예정</i>인 친구
      </S._MainTextBox>
      <S.Row>
        <FriendCardSecondary name="전영준" period="1일 뒤 예정" />
        <FriendCardSecondary name="정대현" period="3일 뒤 예정" />
      </S.Row>
      <S.Row>
        <FriendCardSecondary name="문정민" period="5일 뒤 예정" />
        <FriendCardSecondary name="김준호" period="1일 뒤 예정" />
      </S.Row>
      <S._MainTextBox color="gray700" highlightColor="white">
        그 외 친구
      </S._MainTextBox>
      <FriendCardGray state={location} />
      <S._PlusButton
        onClick={() => {
          navigate("/friend_add");
        }}
      />
    </S._FriendListContainer>
  );
};

export default FriendList;
