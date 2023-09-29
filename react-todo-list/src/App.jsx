import { useState } from "react";

import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      value: newTodo,
    };
    setTodos((oldTodos) => [...oldTodos, todo]);
    setNewTodo("");
    console.log(newTodo);
    console.log(todos);
  }

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
        <button type="submit" onClick={addTodo}>
          Add To Do
        </button>
        <ul>
          {todos.map((todo) => {
            return <li key={todo.id}>{todo.value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
