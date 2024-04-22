import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [tRate, setTRate] = useState(0);
  return (
    <div>
      <StarRating onSetTRate={setTRate} maxRating={7} color="blue" />
      <p>The movie was rated {tRate}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      color="red"
      size={48}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test></Test>
  </React.StrictMode>
);
