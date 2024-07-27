import React from "react";

const LeaderItem = ({ image, name, title }) => {
  return (
    <div className="programItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
};

export default LeaderItem;
