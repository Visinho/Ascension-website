import React from "react";
import { ProgramList } from "../helpers/ProgramList";
import ProgramItem from "../components/ProgramItem";

const Programs = () => {
  return (
    <div className="programs">
      <h1 className="menuTitle">Our Programs</h1>
      <div className="programList">
        {ProgramList.map((programList, key) => {
          return (
            <ProgramItem
              image={programList.image}
              name={programList.name}
              time={programList.time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
