import * as S from "./style";
import * as I from "../../../Asset/index";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { css } from "styled-components";

const Tabbar: React.FC = () => {
  const { pathname } = useLocation();

  const select = (currentPath: string) =>
    currentPath === pathname && css({ fill: "#DE8282" });

  return (
    <>
      <S.TabbarWrapper>
        <S.TabbarList>
          <S.ListElement>
            <Link to={"/friend"}>
              <S.StyledSvg>
                <I.Friend />
              </S.StyledSvg>
            </Link>
          </S.ListElement>
          <S.ListElement>
            <Link to={"/main"}>
              <I.Main />
            </Link>
          </S.ListElement>
          <S.ListElement>
            <Link to={"/question"}>
              <I.Question />
            </Link>
          </S.ListElement>
          <S.ListElement>
            <Link to={"/my"}>
              <I.Mypage />
            </Link>
          </S.ListElement>
        </S.TabbarList>
      </S.TabbarWrapper>
    </>
  );
};

export default Tabbar;
