import React from "react";

function Accordion({ title, active, setActive }) {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>Question {title} </p>
          <span onClick={() => setActive(title)}>Clik Me</span>
        </div>
      </div>
      <div className={(active === title ? "show" : "") + "accordionContent"}>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex
            voluptatum voluptatem. Iusto, quia maiores quas, dignissimos rerum
            quo nemo totam numquam quasi ratione quae libero placeat, aspernatur
            incidunt animi?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
