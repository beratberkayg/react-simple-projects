import React, { useState } from "react";
import Input from "../components/Input";
import { Todos } from "../types/type";
import Message from "../components/Message";

const Todo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodo = () => {
    if (todo) setTodos([...todos, { message: todo, id: todos.length + 1 }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <div className="h-screen bg-orange-500 flex justify-center items-center ">
      <div className="min-h-[50%] w-3/5 p-5 bg-slate-200 flex  items-center flex-col shadow-2xl rounded-md">
        <h1 className="text-3xl">Yapılacaklar Listesi</h1>
        <div className="w-2/3 mt-10 flex justify-around items-center">
          <Input addTodo={addTodo} todo={todo} setTodo={setTodo} />
        </div>
        <Message deleteTodo={deleteTodo} todos={todos} />
      </div>
    </div>
  );
};

export default Todo;
