import * as S from "./style";
import MeatballmenuWhite from "../../Asset/friendList/meatballmenuWhite.png";
import MeatballmenuGray from "../../Asset/friendList/meatballmenuGray.png";
import { emotionImage } from "../../Asset/common/emotionImages";
import { useState } from "react";

export const FriendCardMain = () => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  return (
    <S._CardBox>
      <S._ProfileCard
        backgroundColor="main"
        backgroundImage={emotionImage("sensitive")}
        style={{ paddingLeft: "68px" }}
      >
        <S._UserName color="white">오종진</S._UserName>
        <S._dateText>생리 1일차</S._dateText>
        <img
          src={MeatballmenuWhite}
          onClick={() => setDeleteModal(!deleteModal)}
        />
        {deleteModal && <S._DeleteModal>친구 삭제</S._DeleteModal>}
      </S._ProfileCard>
    </S._CardBox>
  );
};

export const FriendCardSecondary = () => {
  return (
    <S._CardBox>
      <S._ProfileCard
        backgroundColor="secondary"
        style={{ paddingLeft: "14px" }}
      >
        <S._UserName color="white">기준</S._UserName>
        <S._dateText>1일 뒤 예정</S._dateText>
        <img src={MeatballmenuWhite} />
      </S._ProfileCard>
    </S._CardBox>
  );
};

export const FriendCardGray = () => {
  return (
    <S._CardBox>
      <S._ProfileCardGray>
        <S._UserName color="gray700">남가연</S._UserName>
        <img src={MeatballmenuGray} />
      </S._ProfileCardGray>
      <S._ProfileCardGray>
        <S._UserName color="gray700">남가연</S._UserName>
        <img src={MeatballmenuGray} />
      </S._ProfileCardGray>
      <S._ProfileCardGray>
        <S._UserName color="gray700">남가연</S._UserName>
        <img src={MeatballmenuGray} />
      </S._ProfileCardGray>
      <S._ProfileCardGray>
        <S._UserName color="gray700">남가연</S._UserName>
        <img src={MeatballmenuGray} />
      </S._ProfileCardGray>
      <S._ProfileCardGray>
        <S._UserName color="gray700">남가연</S._UserName>
        <img src={MeatballmenuGray} />
      </S._ProfileCardGray>
    </S._CardBox>
  );
};
