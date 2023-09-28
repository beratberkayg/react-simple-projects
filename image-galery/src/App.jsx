import { useState } from "react";
import Image from "./Image";
import "./App.css";

function App() {
  return (
    <div className="hero">
      <div className="container">
        <div className="title">
          <h1>React Image Gallery</h1>
        </div>
        <div className="selected">
          <img src="" alt="" />
        </div>
        <div className="imgContainer">
          {Image.map((img, index) => (
            <img key={index} src={img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
