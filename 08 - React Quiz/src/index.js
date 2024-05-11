import React from "react";

import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';

import App from "./component/App";
import "./index.css";
import { QuizContextProvider } from "./contexts/QuizContext";

// REACT 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </React.StrictMode>
);
