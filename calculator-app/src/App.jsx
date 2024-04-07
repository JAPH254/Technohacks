import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButton from "./CalculatorButton";
import "./App.css";

const App = () => {
  const [expression, setExpression] = useState("");
  const [total, setTotal] = useState(null);

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => {
      if (/[*+-\/]$/.test(prevExpression) && /[*+-\/]/.test(value)) {
        // Prevent consecutive operators
        return prevExpression;
      }
      return prevExpression + value;
    });
  };

  const handleClear = () => {
    setExpression("");
    setTotal(null);
  };

  const handleEquals = () => {
    try {
      const result = eval(expression);
      setTotal(result);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  return (
    <div className="calculator border rounded border-secondary">
      <div className="row">
        <div className="col-9">
          <p className="bg-secondary rounded">
            <CalculatorDisplay expression={expression || total} />
          </p>
        </div>
        <div className="col p-1">
          <CalculatorButton handleClick={handleClear} label="C" />
        </div>
      </div>

      <div className="row m-1">
        <div className="col-3">
          <CalculatorButton
            handleClick={() => handleButtonClick("7")}
            label="7"
          />
        </div>
        <div className="col-3">
          <CalculatorButton
            handleClick={() => handleButtonClick("8")}
            label="8"
          />
        </div>
        <div className="col-3">
          <CalculatorButton
            handleClick={() => handleButtonClick("9")}
            label="9"
          />
        </div>
        <div className="col-3">
          {" "}
          <CalculatorButton
            handleClick={() => handleButtonClick("+")}
            label="+"
          />
        </div>
      </div>
      <div className="row m-1">
        <div className="col-3">
          <CalculatorButton
            handleClick={() => handleButtonClick("4")}
            label="4"
          />
        </div>
        <div className="col-3">
          <CalculatorButton
            handleClick={() => handleButtonClick("5")}
            label="5"
          />
        </div>
        <div className="col-3">
          <CalculatorButton
            handleClick={() => handleButtonClick("6")}
            label="6"
          />
        </div>
        <div className="col-3">
          {" "}
          <CalculatorButton
            handleClick={() => handleButtonClick("*")}
            label="*"
          />
        </div>
      </div>
      <div className="row m-1">
        <div className="col-3">
          {" "}
          <CalculatorButton
            handleClick={() => handleButtonClick("1")}
            label="1"
          />
        </div>
        <div className="col-3">
          {" "}
          <CalculatorButton
            handleClick={() => handleButtonClick("2")}
            label="2"
          />
        </div>
        <div className="col-3">
          <CalculatorButton
            handleClick={() => handleButtonClick("3")}
            label="3"
          />
        </div>
        <div className="col-3">
          {" "}
          <CalculatorButton
            handleClick={() => handleButtonClick("-")}
            label="-"
          />
        </div>
      </div>
      <div className="row m-1">
        <div className="col-3">
          {" "}
          <CalculatorButton
            handleClick={() => handleButtonClick("/")}
            label="/"
          />
        </div>
        <div className="col-3">
          <CalculatorButton
            handleClick={() => handleButtonClick("0")}
            label="0"
          />
        </div>
        <div className="col-3">
          {" "}
          <CalculatorButton
            handleClick={() => handleButtonClick(".")}
            label="."
          />
        </div>
        <div className="col-3">
          <CalculatorButton handleClick={handleEquals} label="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
