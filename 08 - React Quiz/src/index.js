import React from "react";

import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';

import App from "./component/App";
import "./index.css";

// REACT 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
