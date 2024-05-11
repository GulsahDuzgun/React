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
import { useQuizContext } from "../contexts/QuizContext";

function App() {
  const { status } = useQuizContext();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StarterScreen />}
        {status === "active" && (
          <>
            <Progress />
            <QuestionList />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
