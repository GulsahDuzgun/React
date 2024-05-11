import React from "react";
import { useQuizContext } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, highscore, totalMaxPoint, dispatch } = useQuizContext();
  const percentage = (points / totalMaxPoint) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span> {emoji}</span>
        You scored <strong>{points}</strong> out of {totalMaxPoint} points (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">( Highscore : {highscore} points )</p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-uı"
      >
        Restart
      </button>
    </>
  );
}
