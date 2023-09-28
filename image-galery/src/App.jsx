import { useState } from "react";
import Images from "./Image";
import "./App.css";

function App() {
  const [selectedImg, setSelectedImg] = useState(Images[3]);

  return (
    <div className="hero">
      <div className="container">
        <div className="title">
          <h1>React Image Gallery</h1>
        </div>
        <img className="selected" src={selectedImg} />
        <div className="imgContainer">
          {Images.map((img, index) => (
            <img key={index} src={img} onClick={() => setSelectedImg(img)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
