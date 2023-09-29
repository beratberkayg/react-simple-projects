import { useState } from "react";

import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {}

  return (
    <div className="hero">
      <div className="container">
        <h1>React To Do List</h1>
        <input
          type="text"
          placeholder="add to do"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit" onClick={addTodo()}>
          Add To Do
        </button>
      </div>
    </div>
  );
}

export default App;
