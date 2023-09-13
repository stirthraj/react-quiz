import React from "react";

function Button({ onClick, className, text }) {
  return (
    <div onClick={onClick} className={"" + className}>
      {text}
    </div>
  );
}

export default Button;
