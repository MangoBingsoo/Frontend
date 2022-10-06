import * as S from "./style";
import MeatballmenuWhite from "../../Asset/friendList/meatballmenuWhite.png";
import MeatballmenuGray from "../../Asset/friendList/meatballmenuGray.png";
import { emotionImage } from "../../Asset/common/emotionImages";
import { useState } from "react";

interface friendInfo {
  name: string;
  period: string;
}

interface ingFriendInfo {
  name: string;
  period: string;
  emotionType: "happy" | "nomal" | "sad" | "sensitive";
}

export const FriendCardMain = ({
  name,
  period,
  emotionType,
}: ingFriendInfo) => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [viewProfileCard, setViewProfileCard] = useState<boolean>(true);
  return (
    <S._CardBox>
      {viewProfileCard ? (
        <S._ProfileCard
          backgroundColor="main"
          backgroundImage={emotionImage(emotionType)}
          style={{ paddingLeft: "68px" }}
        >
          <S._UserName color="white">{name}</S._UserName>
          <S._dateText>{period}</S._dateText>
          <img
            src={MeatballmenuWhite}
            onClick={() => setDeleteModal(!deleteModal)}
          />
          {deleteModal && (
            <S._DeleteModal onClick={() => setViewProfileCard(false)}>
              친구 삭제
            </S._DeleteModal>
          )}
        </S._ProfileCard>
      ) : null}
    </S._CardBox>
  );
};

export const FriendCardSecondary = ({ name, period }: friendInfo) => {
  return (
    <S._CardBox>
      <S._ProfileCard
        backgroundColor="secondary"
        style={{ paddingLeft: "14px" }}
      >
        <S._UserName color="white">{name}</S._UserName>
        <S._dateText>{period}</S._dateText>
        <img src={MeatballmenuWhite} />
      </S._ProfileCard>
    </S._CardBox>
  );
};

type PropsType = {
  state: boolean;
};

export const FriendCardGray = ({ state }: PropsType) => {
  return (
    <S._CardBox>
      <S._ProfileCardGray>
        <S._UserName color="gray700">손재민</S._UserName>
        <img src={MeatballmenuGray} />
      </S._ProfileCardGray>
      <S._ProfileCardGray>
        <S._UserName color="gray700">김범진</S._UserName>
        <img src={MeatballmenuGray} />
      </S._ProfileCardGray>
      <S._ProfileCardGray>
        <S._UserName color="gray700">김승진</S._UserName>
        <img src={MeatballmenuGray} />
      </S._ProfileCardGray>
      <S._ProfileCardGray>
        <S._UserName color="gray700">남가연</S._UserName>
        <img src={MeatballmenuGray} />
      </S._ProfileCardGray>
      <S._ProfileCardGray>
        <S._UserName color="gray700">오종진</S._UserName>
        <img src={MeatballmenuGray} />
      </S._ProfileCardGray>
      <S._ProfileCardGray>
        <S._UserName color="gray700">기준</S._UserName>
        <img src={MeatballmenuGray} />
      </S._ProfileCardGray>
      <S._ProfileCardGray>
        <S._UserName color="gray700">홍길동</S._UserName>
        <img src={MeatballmenuGray} />
      </S._ProfileCardGray>
      <S._ProfileCardGray>
        <S._UserName color="gray700">김철수</S._UserName>
        <img src={MeatballmenuGray} />
      </S._ProfileCardGray>
      {state ? (
        <S._ProfileCardGray>
          <S._UserName color="gray700">윤지빈</S._UserName>
          <img src={MeatballmenuGray} />
        </S._ProfileCardGray>
      ) : (
        <></>
      )}
    </S._CardBox>
  );
};
