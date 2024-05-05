import React from "react";

export default function Question({ question, dispatch, answer, points }) {
  console.log(question);
  return (
    <div className="options">
      {question.options.map((option, indx) => (
        <button
          className={`btn btn-option ${
            answer !== null
              ? indx === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          } ${answer === indx ? "answer" : ""} `}
          onClick={() => dispatch({ type: "questionAnswered", payload: indx })}
          key={indx}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
