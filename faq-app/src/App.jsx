import { useState } from "react";
import Accordion from "./components/Accordion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>FAQ App</h1>
      <Accordion title="Question 1" />
      <Accordion title="Question 2" />
      <Accordion title="Question 3" />
      <Accordion title="Question 4" />
      <Accordion title="Question 5" />
    </div>
  );
}

export default App;
