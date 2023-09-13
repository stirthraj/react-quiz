import React from "react";
import AnswerDisplay from "./AnswerDisplay";

function QuestionDisplay({ question, answers, handleResponse, index }) {
  return (
    <>
      <div className="Quiz-Question">Quiz Platform</div>
      <div className="Quiz-Question w-full">
        <span className="Qid">{index}</span>
        {". " + question}
      </div>
      {answers.map((opt, i) => (
        <div className="Quiz-Answer w-full" key={i}>
          <AnswerDisplay i={i} handleResponse={handleResponse} opt={opt} />

          {/* <input id={'option'+i} type='checkbox'  name={'answer'+i} value={opt.isCorrect} checked={opt.isCorrect} onClick={(e)=>{e.preventDefault();
              handleResponse(e.target.checked)}}/>
              <label htmlFor={'option'+i}>{opt.value}</label> */}
        </div>
      ))}
    </>
  );
}

export default QuestionDisplay;
