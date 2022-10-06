import {
  DATA_FOR_CHILDREN,
  DATA_FOR_MAN,
  DATA_FOR_WOMAN,
} from "../../shared/question";
import * as S from "./style";
import * as I from "../../Asset/index";
import { theme } from "../../theme";
import { useEffect, useState } from "react";

const Question = () => {
  const DATA = [DATA_FOR_MAN, DATA_FOR_WOMAN, DATA_FOR_CHILDREN];
  const [category, setCategory] = useState(0);
  const [isClicked, setIsClicked] = useState<boolean[]>(
    new Array(DATA_FOR_MAN.length).fill(false)
  );

  useEffect(() => {
    setIsClicked(new Array(DATA[category].length).fill(false));
  }, [category]);

  return (
    <S.QuestionPageWRap>
      <S.QuestionTitleWrap>
        <S.QuestionTitle>
          월경이 궁금한{" "}
          <span style={{ color: `${theme.main}` }}>
            {category === 0 ? "남성" : category === 1 ? "여성" : "학생"}
          </span>
          분들을위해
        </S.QuestionTitle>
      </S.QuestionTitleWrap>
      <S.QuestionCategoryBox>
        <S.QuestionCategoryWrap>
          <S.QuestionCategory
            backgroundColor={`${category === 0 ? theme.main : theme.gray300}`}
            textColor={`${category === 0 ? theme.white : theme.gray500}`}
            onClick={() => {
              setCategory(0);
            }}
          >
            남성
          </S.QuestionCategory>
          <S.QuestionCategory
            backgroundColor={`${category === 1 ? theme.main : theme.gray300}`}
            textColor={`${category === 1 ? theme.white : theme.gray500}`}
            onClick={() => {
              setCategory(1);
            }}
          >
            여성
          </S.QuestionCategory>
          <S.QuestionCategory
            backgroundColor={`${category === 2 ? theme.main : theme.gray300}`}
            textColor={`${category === 2 ? theme.white : theme.gray500}`}
            onClick={() => {
              setCategory(2);
            }}
          >
            학생
          </S.QuestionCategory>
        </S.QuestionCategoryWrap>
      </S.QuestionCategoryBox>
      <S.QuestionBox>
        {DATA[category].map((question) => {
          return (
            <S.QuestionWrap
              size={`${isClicked[question.id]}`}
              backgroundColor={`${
                isClicked[question.id] ? theme.main : theme.gray300
              }`}
              textColor={`${
                isClicked[question.id] ? theme.white : theme.black
              }`}
              key={question.id}
            >
              <S.QuestionTextWrap>
                <S.QuestionCharAndTextWrap>
                  <S.QuestionCharWrap>Q. </S.QuestionCharWrap>
                  <span>{question.question}</span>
                </S.QuestionCharAndTextWrap>
                {isClicked[question.id] ? (
                  <S.QuestionUnderArrow
                    onClick={() => {
                      setIsClicked((prev) =>
                        prev.map((value: any, idx) =>
                          idx === question.id ? !value : value
                        )
                      );
                    }}
                    style={{ transform: "rotate(180deg)" }}
                  >
                    <I.UnderArrow color={theme.white} />
                  </S.QuestionUnderArrow>
                ) : (
                  <S.QuestionUnderArrow
                    onClick={() => {
                      setIsClicked((prev) =>
                        prev.map((value: any, idx) =>
                          idx === question.id ? !value : value
                        )
                      );
                    }}
                  >
                    <I.UnderArrow color={theme.gray700} />
                  </S.QuestionUnderArrow>
                )}
              </S.QuestionTextWrap>
              {isClicked[question.id] && (
                <S.QueestionWithAnswer>
                  <S.AnswerCharWrap>
                    <S.AnswerChar>A. </S.AnswerChar>
                  </S.AnswerCharWrap>
                  <span>{question.answer}</span>
                </S.QueestionWithAnswer>
              )}
            </S.QuestionWrap>
          );
        })}
      </S.QuestionBox>
    </S.QuestionPageWRap>
  );
};
export default Question;
