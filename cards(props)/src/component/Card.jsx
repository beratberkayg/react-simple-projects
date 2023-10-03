import React from "react";
import "./card.css";

function Card({ src, name, description }) {
  return (
    <div className="card">
      <img src={src} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
