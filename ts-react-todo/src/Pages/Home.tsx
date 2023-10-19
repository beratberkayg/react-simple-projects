import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Name from "../components/Name";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>();
  const [age, setAge] = useState<number>();

  const id: string = name + age;

  return (
    <div className="h-screen flex justify-center items-center bg-slate-400  ">
      <div className="h-1/2 w-min-3/5 p-5 bg-slate-200 flex  items-center flex-col shadow-2xl rounded-md">
        <h1 className="text-3xl">
          Merhaba {name}, Yapılacaklar Listesine Hoş Geldin...
        </h1>
        <div className="w-full p-20 flex justify-around">
          <input
            className="w-full bg-white rounded border border-gray-300 h-10 pl-3 mr-5"
            type="text"
            placeholder="Adınız.."
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full bg-white rounded border border-gray-300 h-10 pl-3"
            type="text"
            placeholder="Yaşınız"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={() => navigate(`/todo/${id}`)}
          >
            Hadi Başlayalım
          </button>
        </div>
        <Name name={name} age={age} />
      </div>
    </div>
  );
};

export default Home;
