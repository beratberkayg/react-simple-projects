import { useState } from "react";
import "./app.css";

const [minVal, setMinVal] = useState("0");

const [maxVal, setMaxVal] = useState("10");

const [randomNum, setRandomNum] = useState("5");

const giveRandomNum = () => {
  setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
};

function App() {
  return (
    <div className="hero">
      <div className="container">
        <div className="title">
          <h2>Random Number</h2>
          <p>Generate a random number between 1 and 100...</p>
        </div>
        <div className="randomNum">
          <p>
            Random Number : <span>{randomNum}</span>
          </p>
        </div>
        <div className="inputContainer">
          <input
            type="number"
            placeholder="Minimum Value"
            value={minVal}
            onChange={(e) => setMinVal(e.target.value)}
          />

          <input
            type="number"
            placeholder="Maximum Value"
            value={maxVal}
            onChange={(e) => setMaxVal(e.target.value)}
          />
        </div>
        <button onClick={giveRandomNum}>Get Random Number</button>
      </div>
    </div>
  );
}

export default App;
