import styled from "styled-components";

export const QuestionPageWRap = styled.div`
  width: 414px;
  height: 896px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const QuestionTitleWrap = styled.div`
  width: 414px;
  height: 120px;
  justify-content: center;
  display: flex;
`;

export const QuestionTitle = styled.span`
  font-size: 20px;
  text-align: center;
  margin-top: 76px;
  font-weight: bold;
`;

export const QuestionCategoryBox = styled.div`
  width: 414px;
  height: 50px;
  display: flex;
  justify-content: center;
`;

export const QuestionCategoryWrap = styled.div`
  width: 374px;
  height: 50px;
  display: flex;
  border-radius: 50px;
  background-color: #f6f6f6;
  justify-content: space-around;
  align-items: center;
`;

export const QuestionCategory = styled.span<{
  backgroundColor: string;
  textColor: string;
}>`
  width: 90px;
  height: 30px;
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  border-radius: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const QuestionBox = styled.div`
  width: 414px;
  height: 716px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionWrap = styled.div<{
  backgroundColor: string;
  textColor: string;
}>`
  width: 339px;
  height: 53px;
  display: flex;
  text-align: center;
  align-items: center;
  padding: 0 15px 0 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  margin: 15px 0 0 0;
  border-radius: 20px;
  justify-content: space-between;
  font-size: 15px;
`;

export const QuestionUnderArrow = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
