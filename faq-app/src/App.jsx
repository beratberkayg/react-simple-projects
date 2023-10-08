import { useState } from "react";
import Accordion from "./components/Accordion";
import "./App.css";

function App() {
  const [active, setActive] = useState("Question1");
  return (
    <div className="App">
      <h1>FAQ App</h1>
      <Accordion title="Question 1" active={active} setActive={setActive} />
      <Accordion title="Question 2" active={active} setActive={setActive} />
      <Accordion title="Question 3" active={active} setActive={setActive} />
      <Accordion title="Question 4" active={active} setActive={setActive} />
      <Accordion title="Question 5" active={active} setActive={setActive} />
    </div>
  );
}

export default App;
