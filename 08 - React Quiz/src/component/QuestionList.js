import React from "react";
import Question from "./Question";
import { useQuizContext } from "../contexts/QuizContext";

export default function QuestionList() {
  const { questions } = useQuizContext();
  return (
    <div>
      <h4>{questions.question}</h4>
      <Question />
    </div>
  );
}
