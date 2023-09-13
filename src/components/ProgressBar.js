import React from "react";

function ProgressBar({ currState, quesestionArray }) {
  return (
    <div className="PB-bar">
      {quesestionArray.map((ele, i) => (
        <div
          key={i}
          className={"text-center " + (i < currState ? "grey" : "wrong")}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
