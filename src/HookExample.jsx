import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PointsCalculator from "./PointsCalculator";

function HookExample() {
  const [clicks, setClicks] = useState(0);
  const calculator = <PointsCalculator />;

  useEffect(() => {
    document.title = `${clicks} clicks so far!`;
  });

  return (
    <div>
      <p>{clicks} clicks</p>
      <button onClick={() => setClicks(clicks + 1)}>
        Click to increase count
      </button>
      <button onClick={() => ReactDOM.render(calculator,document.getElementById('root'))}>
        Go back to calculator
      </button>
    </div>
  );
}

export default HookExample;