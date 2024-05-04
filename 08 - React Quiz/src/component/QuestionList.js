import React from "react";
import Question from "./Question";

export default function QuestionList({ questions }) {
  console.log(questions);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Question questions={questions} />
    </div>
  );
}
