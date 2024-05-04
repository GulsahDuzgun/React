import { useReducer, useEffect } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import StarterScreen from "./StarterScreen";
import Question from "./Question";
import Main from "./Main";
import QuestionList from "./QuestionList";

const initialState = {
  questions: [],
  status: "loading", //'loading', 'error', 'ready','finished'
  currentIndex: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "getData":
      return { ...state, status: "ready", questions: action.payload };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return { ...state, status: "active" };
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [{ status, questions, currentIndex: index }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;

  useEffect(function () {
    fetch(`http://localhost:1227/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "getData", payload: data }))
      .catch((e) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main numQuestions={numQuestions}>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StarterScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <QuestionList questions={questions[index]} />}
      </Main>
    </div>
  );
}

export default App;
