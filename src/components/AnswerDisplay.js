import React, { useState } from "react";
import Button from "./Button";

function AnswerDisplay({ i, handleResponse, opt }) {
  const [right, setRight] = useState("");
  return (
    <Button
      className={"pl4" + right}
      onClick={(e) => {
        e.preventDefault();
        setRight(opt.isCorrect ? " right" : " wrong");
        setTimeout(() => {
          setRight("");
          handleResponse(opt.isCorrect);
        }, 500);
      }}
      text={opt.value}
    />
  );
}

export default AnswerDisplay;
