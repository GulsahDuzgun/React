import { useReducer, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],
  status: "loading", //'loading', 'error', 'ready','finished'
};

function reducer(state, action) {
  switch (action.type) {
    case "getData":
      return { ...state, status: "ready", questions: action.payload };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch(`http://localhost:1227/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "getData", payload: data }))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15 </p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
