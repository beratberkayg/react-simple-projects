import { useState } from "react";

import "./App.css";

function App() {
  const [hex, setHex] = useState(#ffffff)
  
  function randomHex(){
    const randomColor = "#"+ Math.floor(Math.random()*16777721).toString(16);
  }
  return <div className="App">

  </div>;
}

export default App;
