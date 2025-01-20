import React from "react";
import "./ChildComponent.css";

function ChildComponent({ person }) {
  return (
    <div>
      <h2>Here's {person.name}'s personal information:</h2>
      <p>Age: {person.info.age}</p>
      <p>City: {person.info.city}</p>
      <p>Job: {person.info.job}</p>
      <h3>Hobbies:</h3>
      <ul>
        {" "}
        {person.info.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChildComponent;
