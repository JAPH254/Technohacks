import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [targetTime, setTargetTime] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setRemaining((prevRemaining) => Math.max(0, prevRemaining - 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setRemaining(0);
    setTargetTime(0);
    setIsRunning(false);
  };

  const setDuration = (event) => {
    const newDuration = parseInt(event.target.value, 10) * 1000; // Convert input to milliseconds
    setTargetTime(new Date().getTime() + newDuration);
    setRemaining(newDuration);
  };

  const getFormattedTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  return (
    <div className="container" style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
      <img src="src\assets\bg-img.jpg" style={{width:"100px", borderRadius:"25%"}} alt="" />
      <h1>Count down Timer</h1>
      <div id="title" style={{display:"flex", gap:"1rem"}}>
        <span>Days</span>
        <span>Hours</span>

        <span>Minutes</span>

        <span>Seconds</span>
      </div>
      <div id="timer" style={{display:"flex", gap:"1rem", fontSize:"30px"}}>
        <span>{getFormattedTime(days)}</span>
        <span>:</span>
        <span>{getFormattedTime(hours)}</span>
        <span>:</span>
        <span>{getFormattedTime(minutes)}</span>
        <span>:</span>
        <span>{getFormattedTime(seconds)}</span>
      </div>
      <div className="controls" >
        <div className="div">
          <input
            type="number"
            min="0"
            onChange={setDuration}
            placeholder="Set Duration (seconds)"
            style={{ borderRadius: "10px", padding: "15px", margin: "40px" }}
          />
        </div>
        <div className="div">
          {" "}
          <button onClick={startTimer} disabled={isRunning}>
            Start
          </button>
          <button onClick={stopTimer} disabled={!isRunning}>
            Stop
          </button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
