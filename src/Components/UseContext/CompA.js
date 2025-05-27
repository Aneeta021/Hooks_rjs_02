import React from "react";
import CompB from "./CompB";

const CompA = (props) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2>CompA:</h2>
        <br />
        <div>
          <CompB name={props.name} />
        </div>
      </div>
    </>
  );
};

export default CompA;
