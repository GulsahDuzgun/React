import React from "react";
import { useQuizContext } from "../contexts/QuizContext";

export default function Progress() {
  const { answer, index, numQuestions, points, totalMaxPoint } =
    useQuizContext();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        {points} / {totalMaxPoint}
      </p>
    </header>
  );
}
