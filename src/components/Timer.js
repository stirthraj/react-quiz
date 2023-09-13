import React, { useEffect, useState } from "react";

function Timer({ time }) {
  const [second, setSecond] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((second) => second - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="timer">
      {second > 10
        ? "Time Left " + second + "sec"
        : second > 0
        ? "Running Out of time " + second + "sec"
        : "Longer than a minute: " + Math.abs(second) + "sec"}
    </div>
  );
}

export default Timer;
