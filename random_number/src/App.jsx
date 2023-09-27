import { useState } from "react";
import "./app.css";

function App() {
  return (
    <div className="hero">
      <div className="container">
        <div className="title">
          <h2>Random Number</h2>
          <p>Generate a random number between 1 and 100...</p>
        </div>
        <div className="randomNum">
          <p>Random Number : {}</p>
        </div>
        <div className="inputContainer">
          <input type="number" aria-valuemin={0} placeholder="Minimum Value" />

          <input type="number" placeholder="Maximum Value" />
        </div>
        <button>Get Random Number</button>
      </div>
    </div>
  );
}

export default App;
