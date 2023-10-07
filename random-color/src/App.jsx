import { useState } from "react";

import "./App.css";

function App() {
  const [hex, setHex] = useState(#ffffff)
  
  function randomHex(){
    const randomColor = "#"+ Math.floor(Math.random()*16777721).toString(16);
    setHex(randomColor);
  }
  return <div className="App">
    <h1>{hex}</h1>
    <button>Click For New Background Color</button>
    <button>Copy The Hex Value</button>
  </div>;
}

export default App;