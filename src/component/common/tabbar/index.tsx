import * as S from "./style";
import * as I from "../../../Asset/index";

const Tabbar: React.FC = () => {
  return (
    <>
      <S.TabbarWrapper>
        <S.TabbarList>
          <S.ListElement>
            <I.Friend />
          </S.ListElement>
          <S.ListElement>
            <I.Main />
          </S.ListElement>
          <S.ListElement>
            <I.Question />
          </S.ListElement>
          <S.ListElement>
            <I.Mypage />
          </S.ListElement>
        </S.TabbarList>
      </S.TabbarWrapper>
    </>
  );
};

export default Tabbar;
