import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  const time = () => {
    const count = timer - 1;
    setTimer(count);
  };

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      const count = Math.floor(event.target.value);
      if (typeof count === "number" && count > 0) {
        setTimer(count);
        setStart(true);
      } else {
        setTimer(0);
      }
    }
  }

  useEffect(() => {
    if (timer === 0) {
      setStart(false);
    }
    if (start === true) {
      const interval = setInterval(time, 1000);
      return () => clearInterval(interval);
    }
  }, [start, timer]);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  );
};

export default App;
