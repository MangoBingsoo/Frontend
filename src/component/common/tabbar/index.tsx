import * as S from "./style";
import * as I from "../../../Asset/index";
import { Link, useLocation } from "react-router-dom";
import { css } from "styled-components";
import { theme } from "../../../theme";

const Tabbar: React.FC = () => {
  const { pathname } = useLocation();

  const select = (currentPath: string) => {
    return currentPath === pathname ? theme.main : theme.gray500;
  };

  return (
    <>
      <S.TabbarWrapper>
        <S.TabbarList>
          <S.ListElement>
            <Link to={"/friend"}>
              <S.StyledSvg>
                <I.Friend color={select("/friend")} />
              </S.StyledSvg>
            </Link>
          </S.ListElement>
          <S.ListElement>
            <Link to={"/"}>
              <S.StyledSvg>
                <I.Main color={select("/")} />
              </S.StyledSvg>
            </Link>
          </S.ListElement>
          <S.ListElement>
            <Link to={"/question"}>
              <S.StyledSvg>
                <I.Question color={select("/question")} />
              </S.StyledSvg>
            </Link>
          </S.ListElement>
          <S.ListElement>
            <Link to={"/my"}>
              <S.StyledSvg>
                <I.Mypage color={select("/my")} />
              </S.StyledSvg>
            </Link>
          </S.ListElement>
        </S.TabbarList>
      </S.TabbarWrapper>
    </>
  );
};

export default Tabbar;
