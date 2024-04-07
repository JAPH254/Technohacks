import React from 'react';

const CalculatorButton = ({ handleClick, label }) => {
  return (
    <button className="calculator-button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default CalculatorButton;
