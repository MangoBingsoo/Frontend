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
  margin: 30px 0;
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
  font-weight: bold;
`;

export const QuestionBox = styled.div`
  width: 414px;
  height: 716px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionWrap = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  align-items: center;
`;

export const QuestionCharAndTextWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const QuestionCharWrap = styled.div`
  font-size: 13px;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const QuestionTextWrap = styled.div<{
  backgroundColor: string;
  textColor: string;
  size: string;
}>`
  width: 339px;
  height: ${({ size }) => (size === "false" ? "53px" : "150px")};
  display: flex;
  text-align: left;
  /* align-items: center; */

  padding: 15px 15px 15px 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  margin: 15px 0 0 0;
  border-radius: 20px;
  font-size: 13px;
  flex-direction: ${({ size }) => (size === "false" ? "row" : "column")};
`;

export const QuestionUnderArrow = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QueestionWithAnswer = styled.div`
  width: 280px;
  height: auto;
  display: flex;
  /* align-items: flex-start; */
  align-items: center;
  margin-top: 10px;
  border-top: 1px white solid;
  text-align: left;
  padding: 15px 0 0 0;
  font-size: 13px;
  flex-direction: row;
`;

export const AnswerCharWrap = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: flex-start;
`;

export const AnswerChar = styled.span`
  font-size: 13px;
  margin-right: 10px;
  /* display: flex; */
  align-items: center;
`;
