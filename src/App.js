import "./App.css";
import quesestionArray from "./question.json";
import { useState } from "react";
import QuestionDisplay from "./components/QuestionDisplay";
import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";
import Timer from "./components/Timer";
function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [over, setOver] = useState(false);
  const [summary, setSummary] = useState([]);
  const handler = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setSummary([...summary, { Question: index, Answer: true }]);
    } else {
      setSummary([...summary, { Question: index, Answer: false }]);
    }

    const nextQuestion = index + 1;
    if (nextQuestion < quesestionArray.length) {
      setIndex(nextQuestion);
    } else {
      setOver(true);
      setIndex(nextQuestion);
    }
  };

  return (
    <div className="Quiz">
      <Timer time={quesestionArray.length * 60} />
      <ProgressBar currState={index} quesestionArray={quesestionArray} />
      {over ? (
        <div className="Quiz-Over">
          <div className="Quiz-Question">
            {`Quiz Over! Your score: ${score}/${quesestionArray.length}`}
          </div>
          {summary.map((el, j) => (
            <div key={j}>{el.Question + 1 + "-" + el.Answer}</div>
          ))}

          <Button
            className="Quiz-Btn"
            onClick={(e) => {
              e.preventDefault();
              setIndex(0);
              setOver(false);
              setScore(0);
              setSummary([]);
            }}
            text={"Restart"}
          />
        </div>
      ) : (
        <QuestionDisplay
          index={index + 1}
          question={quesestionArray[index].question}
          answers={quesestionArray[index].answers}
          handleResponse={handler}
        />
      )}
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
