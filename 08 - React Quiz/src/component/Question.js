import React from "react";

export default function Question({ questions }) {
  return (
    <div className="options">
      {questions.options.map((option, indx) => (
        <button className=" btn btn-option" key={indx}>
          {option}
        </button>
      ))}
    </div>
  );
}
