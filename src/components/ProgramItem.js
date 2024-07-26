import React from "react";

const ProgramItem = ({ image, name, time }) => {
  return (
    <div className="programItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{time}</p>
    </div>
  );
};

export default ProgramItem;
