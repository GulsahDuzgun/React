import { useReducer, useEffect } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import StarterScreen from "./StarterScreen";
import Main from "./Main";
import QuestionList from "./QuestionList";
import NextButton from "./NextButton";

const initialState = {
  questions: [],
  status: "loading", //'loading', 'error', 'ready','finished'
  currentIndex: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "getData":
      return { ...state, status: "ready", questions: action.payload };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return { ...state, status: "active" };
    case "questionAnswered":
      const question = state.questions[state.currentIndex];
      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, answer: null, currentIndex: state.currentIndex + 1 };
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [{ status, questions, currentIndex: index, points, answer }, dispatch] =
    useReducer(reducer, initialState);
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
      {points}
      <Main numQuestions={numQuestions}>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StarterScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <QuestionList
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
