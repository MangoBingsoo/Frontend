import * as S from "./style";
import Arrow from "../../../Asset/common/navbar/arrow.png";

interface NavBarProps {
  isBack: boolean;
  onClickBack: () => void;
}

const NavBar = ({ isBack, onClickBack }: NavBarProps) => {
  // console.log(isBack);
  return (
    <>
      <S._NavBarContainer>
        {isBack && (
          <img
            src={Arrow}
            alt="화살표"
            onClick={onClickBack}
            style={{
              position: "absolute",
              left: -9.33,
              zIndex: 120,
              width: "28px",
              height: "28px",
            }}
          />
        )}
        <S._PageTitleContainer>친구추가</S._PageTitleContainer>
      </S._NavBarContainer>
    </>
  );
};

export default NavBar;
