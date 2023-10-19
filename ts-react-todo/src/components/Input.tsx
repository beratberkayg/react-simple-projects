import React from "react";

type IProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
};

const Input: React.FC<IProps> = ({ todo, setTodo, addTodo }) => {
  return (
    <div className="w-full flex justify-between">
      <input
        value={todo}
        placeholder="Yapılacak Ekleyin"
        type="text"
        className="w-[300px] bg-white rounded border border-gray-300 p-5 pl-3"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={addTodo}
        className=" p-3 text-white bg-indigo-500 border-0 
         focus:outline-none hover:bg-indigo-600 rounded text-lg "
      >
        Hadi Ekleyelim
      </button>
    </div>
  );
};

export default Input;
