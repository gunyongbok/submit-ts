import React, { useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  return (
    <div>
      <h2>타이머 : {seconds}초</h2>
      <button
        onClick={function () {
          setInterval(() => {
            setSeconds((prev) => prev + 1);
          }, 1000);
        }}
      ></button>
    </div>
  );
};

export default Timer;
