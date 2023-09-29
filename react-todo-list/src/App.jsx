import { useState } from "react";

import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (!newTodo) {
      return alert("please add todo");
    }

    const todo = {
      id: Math.floor(Math.random() * 1000),
      value: newTodo,
    };
    setTodos((oldTodos) => [...oldTodos, todo]);
    setNewTodo("");
    console.log(newTodo);
    console.log(todos);
  }

  function removeTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="hero">
      <div className="container">
        <h1>React To Do List</h1>
        <div className="add-todo">
          <input
            type="text"
            placeholder="add to do"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit" onClick={addTodo}>
            Add To Do
          </button>
        </div>

        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.value}
                <button onClick={() => removeTodo(todo.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
  s;
}

export default App;
