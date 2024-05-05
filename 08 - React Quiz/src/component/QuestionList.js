import React from "react";
import Question from "./Question";

export default function QuestionList({ question, answer, dispatch, points }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Question
        question={question}
        dispatch={dispatch}
        answer={answer}
        points={points}
      />
    </div>
  );
}
