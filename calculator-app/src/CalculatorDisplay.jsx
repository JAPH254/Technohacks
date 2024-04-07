import React from 'react';

const CalculatorDisplay = ({ expression }) => {
  return (
    <div className="calculator-display">
      {expression}
    </div>
  );
};

export default CalculatorDisplay;
