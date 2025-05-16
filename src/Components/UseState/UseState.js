import React, { useState, useEffect } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const click = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-white vh-100 "
        style={{ backgroundColor: "#2a3842" }}
      >
        <h2>UseState</h2>
        <h2>{count}</h2>
        <button className="border-0 rounded px-4 py-2 text-black" onClick={click}>
          Click me
        </button>
      </div>
    </>
  );
};

export default UseState;
