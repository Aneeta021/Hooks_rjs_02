import React from "react";
import CompC from "./CompC";

const CompB = (props) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2>CompB:</h2>
        <br />
        <div>
          <CompC name={props.name} />
        </div>
      </div>
    </>
  );
};

export default CompB;
