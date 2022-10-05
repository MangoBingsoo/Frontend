import { DATA_FOR_WOMAN } from "../../shared/question";
import * as I from "../../Asset/index";
import * as S from "./style";

const Question = () => {
  return (
    <S.QuestionPageWRap>
      <S.QuestionTitleWrap>
        <S.QuestionTitle>
          월경이 궁금한 <span style={{ color: "#DE8282" }}>남성</span>분들을위해
        </S.QuestionTitle>
      </S.QuestionTitleWrap>
      <S.QuestionCategoryBox>
        <S.QuestionCategoryWrap>
          <S.QuestionCategory backgroundColor={"#DE8282"} textColor={"#ffffff"}>
            남성
          </S.QuestionCategory>
          <S.QuestionCategory backgroundColor={"#F6F6F6"} textColor={"#DEDEDE"}>
            여성
          </S.QuestionCategory>
          <S.QuestionCategory backgroundColor={"#F6F6F6"} textColor={"#DEDEDE"}>
            학생
          </S.QuestionCategory>
        </S.QuestionCategoryWrap>
      </S.QuestionCategoryBox>
      <S.QuestionBox>
        {DATA_FOR_WOMAN.map((question) => {
          return (
            <S.QuestionWrap backgroundColor={"#F6F6F6"} textColor={"#000000"}>
              <span>{question.question}</span>
              <S.QuestionUnderArrow>
                <I.UnderArrow />
              </S.QuestionUnderArrow>
            </S.QuestionWrap>
          );
        })}
      </S.QuestionBox>
    </S.QuestionPageWRap>
  );
};
export default Question;
