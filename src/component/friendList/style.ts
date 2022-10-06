import styled from "styled-components";
import plus from "../../Asset/friendList/plus.png";

export const _FriendListContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: 80px;
`;

export const _MainTextBox = styled.div<{
  color: string;
  highlightColor: string;
}>`
  display: block;
  color: ${({ theme, color }) => theme[color]};
  font-weight: 500;
  font-size: 22px;
  > i {
    font-weight: 700;
    font-size: 22px;
    color: ${({ theme, highlightColor }) => theme[highlightColor]};
  }
`;

export const _CardBox = styled.div`
  margin: 12px 0 40px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 14px;
  align-content: flex-start;
`;

export const _ProfileCard = styled.div<{
  backgroundColor: string;
  backgroundImage?: string;
}>`
  height: 80px;
  border-radius: 12px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: 16px 20px;
  background-color: ${({ theme, backgroundColor }) => theme[backgroundColor]};
  > img {
    height: 18px;
    width: 18px;
    position: absolute;
    right: 8px;
    top: 14px;
  }
`;

export const _ProfileCardGray = styled.div`
  height: 48px;
  width: 115px;
  display: flex;
  padding-left: 16px;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  position: relative;
  background-color: ${({ theme }) => theme.gray300};
  > img {
    height: 16px;
    width: 16px;
    position: absolute;
    margin-bottom: 2px;
    right: 12px;
  }
`;

export const _UserName = styled.p<{ color: string }>`
  color: ${({ theme, color }) => theme[color]};
  font-size: 18px;
  font-weight: 500;
`;

export const _dateText = styled.p`
  color: ${({ theme }) => theme.gray300};
  font-size: 16px;
`;

export const _PlusButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.main};
  background-image: url(${plus});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  display: flex;
  right: 20px;
  bottom: 100px;
  box-shadow: 0 4px 5px 0px rgb(0 0 0 / 0.3); ;
`;

export const _DeleteModal = styled.div`
  width: 68px;
  height: 28px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.system_red};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  position: absolute;
  top: 36px;
  right: 13px;
`;
