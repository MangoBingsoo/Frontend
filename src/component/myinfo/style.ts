import styled from "styled-components";

export const _ProfileWrapper = styled.div`
  background-color: ${({ theme }) => theme.main};
  width: 100%;
  height: 230px;
  padding-left: 20px;
  position: relative;
`;

export const _ProfileBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 28px;
`;

export const _ProfileText = styled.p`
  font-size: 34px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
`;

export const _IdText = styled.p`
  height: fit-content;
  margin: auto 0 2px 12px;
  color: ${({ theme }) => theme.gray300};
  font-size: 16px;
`;

export const WarmTextWrap = styled.div`
  width: 414px;
  height: 38px;
  position: absolute;
  top: 258px;
  display: flex;
  justify-content: center;
`;

export const WrapText = styled.span<{
  backgroundColor: string;
  textColor: string;
}>`
  width: 374px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
`;

export const FunctionWrap = styled.div`
  width: 414px;
  height: 63px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 324px;
`;

export const SecondFunctionWrap = styled.div`
  width: 414px;
  height: 63px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 411px;
`;

export const FunctionLeftWrap = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FunctionRightWrap = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubText = styled.span`
  height: 40%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 13px;
  color: gray;
`;

export const MainText = styled.span`
  height: 60%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 15px;
  font-weight: bold;
`;

export const ArrowImg = styled.img`
  width: 30px;
  height: 30px;
  transform: rotate(180deg);
`;
