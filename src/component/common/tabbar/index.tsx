import * as S from "./style";
import * as I from "../../../Asset/index";
import { Link, useLocation } from "react-router-dom";
import { css } from "styled-components";
import { theme } from "../../../theme";
import HomeIndicator from "../homeIndicator";

const Tabbar: React.FC = () => {
  const { pathname } = useLocation();

  const isSelect = (currentPath: string[]) => {
    const isSelectArray = currentPath.map((path) => pathname === path);
    return isSelectArray.includes(true);
  };

  return (
    <>
      <S.TabbarWrapper>
        <S.TabbarList>
          <S.ListElement>
            <Link to={"/friend"}>
              <S.StyledSvg>
                <I.Friend isSelect={isSelect(["/friend", "/friend_add"])} />
              </S.StyledSvg>
            </Link>
          </S.ListElement>
          <S.ListElement>
            <Link to={"/main"}>
              <S.StyledSvg>
                <I.Main isSelect={isSelect(["/main"])} />
              </S.StyledSvg>
            </Link>
          </S.ListElement>
          <S.ListElement>
            <Link to={"/question"}>
              <S.StyledSvg>
                <I.Question isSelect={isSelect(["/question"])} />
              </S.StyledSvg>
            </Link>
          </S.ListElement>
          <S.ListElement>
            <Link to={"/my"}>
              <S.StyledSvg>
                <I.Mypage isSelect={isSelect(["/my"])} />
              </S.StyledSvg>
            </Link>
          </S.ListElement>
        </S.TabbarList>
        <HomeIndicator />
      </S.TabbarWrapper>
    </>
  );
};

export default Tabbar;
