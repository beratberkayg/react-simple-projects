import { useState } from "react";
import Data from "./Data.json";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="hero">
      <h1>Kurtlar Vadisi Konsey Üyeleri</h1>
      <input
        type="text"
        placeholder="Konsey Üyesi Giriniz.."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="data-container">
        {Data.filter((item) => {
          if (searchTerm == "") {
            return item;
          } else if (
            item.title
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return item;
          }
        }).map((item) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.image} />
              <h3>{item.title}</h3>
              <p>{item.Description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
