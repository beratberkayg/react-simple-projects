import React from "react";
import { Todos } from "../types/type";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  todos: Todos[];
  deleteTodo: (id: number) => void;
};

const Message: React.FC<Props> = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, i) => (
        <div className=" flex justify-between items-center mt-5" key={i}>
          {" "}
          {todo.message}{" "}
          <AiOutlineClose
            size={24}
            cursor="pointer"
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Message;
