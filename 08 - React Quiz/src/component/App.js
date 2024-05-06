import { useReducer, useEffect } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import StarterScreen from "./StarterScreen";
import Main from "./Main";
import QuestionList from "./QuestionList";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading", //'loading', 'error', 'ready','finished'
  currentIndex: 0,
  answer: null,
  points: 0,
  highscore: 0,
  remainTime: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "getData":
      return { ...state, status: "ready", questions: action.payload };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return {
        ...state,
        status: "active",
        remainTime: state.questions.length * SECS_PER_QUESTION,
      };
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
    case "finished":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...state,
        status: "ready",
        points: 0,
        currentIndex: 0,
        answer: null,
        remainTime: 10,
      };
    case "startTimer":
      return {
        ...state,
        remainTime: state.remainTime - 1,
        status: state.remainTime === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [
    {
      status,
      questions,
      currentIndex: index,
      points,
      answer,
      highscore,
      remainTime,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const totalMaxPoint = questions.reduce((acc, el) => acc + el.points, 0);

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
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              totalMaxPoint={totalMaxPoint}
              answer={answer}
            />
            <QuestionList
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <Footer>
              <Timer remainTime={remainTime} dispatch={dispatch} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            totalMaxPoint={totalMaxPoint}
            highscore={highscore}
            points={points}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
