import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../common/navbar";
import * as S from "./style";

const FriendAdd = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();
  return (
    <S._FriendAddContainer>
      <NavBar isBack onClickBack={() => navigate(-1)}></NavBar>
      <S._InputWrapper>
        <S._Label>ID</S._Label>
        <S._InputBox
          value={value}
          type="number"
          onChange={(e) => setValue(e.target.value)}
          maxLength={6}
          placeholder="추가하고 싶은 친구의 ID를 적어주세요."
        ></S._InputBox>
      </S._InputWrapper>
      <S._ButtonContainer onClick={() => navigate(-1)} disable={!value}>
        등록
      </S._ButtonContainer>
    </S._FriendAddContainer>
  );
};

export default FriendAdd;
