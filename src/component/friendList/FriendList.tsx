import * as S from "./style";
import {
  FriendCardMain,
  FriendCardSecondary,
  FriendCardGray,
} from "./FriendCard";
import { useNavigate } from "react-router-dom";

const FriendList = () => {
  const navigate = useNavigate();
  return (
    <S._FriendListContainer>
      <S._MainTextBox color="black" highlightColor="main">
        지금 <i>생리 중</i>인 친구
      </S._MainTextBox>
      <FriendCardMain />
      <S._MainTextBox color="black" highlightColor="secondary">
        <i>생리 예정</i>인 친구
      </S._MainTextBox>
      <FriendCardSecondary />
      <S._MainTextBox color="gray700" highlightColor="white">
        그 외 친구
      </S._MainTextBox>
      <FriendCardGray />
      <S._PlusButton
        onClick={() => {
          navigate("/friend_add");
        }}
      />
    </S._FriendListContainer>
  );
};

export default FriendList;
