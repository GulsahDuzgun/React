import React from "react";

export default function Progress({
  answer,
  index,
  numQuestions,
  points,
  totalMaxPoint,
}) {
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
