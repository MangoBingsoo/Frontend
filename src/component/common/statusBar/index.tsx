import StatusBarBlack from "../../../Asset/common/statusBar/StatusBarBlack.png";
import StatusBarWhite from "../../../Asset/common/statusBar/StatusBarWhite.png";
import * as S from "./style";

const StatusBar = () => {
  return (
    <S._StatusBarContainer>
      <img src={StatusBarBlack} />
    </S._StatusBarContainer>
  );
};

export default StatusBar;
