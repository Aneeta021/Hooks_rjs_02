import React, { useContext } from "react";
import { myName } from "./UseContext"; 

const CompC = (props) => {
  const name = useContext(myName);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h2>CompC: {props.name}</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default CompC;
