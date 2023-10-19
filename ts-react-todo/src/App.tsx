import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Todo from "./Pages/Todo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo/:id" element={<Todo />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
