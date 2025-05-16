import React, { useCallback, useState } from "react";
import "./parentComp.css";
import Child from "./Child";

const Parent = () => {
  const [value, setValue] = useState("--");
  const [count, setCount] = useState(0);
  const click = useCallback(() => {
    setValue("Basheer");
  }, []);
  //  const handle = useCallback(() => {
  //   setCount(count + 1);
  // },[])
  //console.log("I'm Parent.....")
  return (
    <>
      <div className="parent-container text-white d-flex justify-content-center align-items-center flex-column vh-100">
        <h2>Parent: {value}</h2>
        <br />
        <button className="parent p-0 border-0 rounded-circle" onClick={click}>
          Click
        </button>
        <br />
        <h3>Update: {count}</h3>
        <button
          className="parent p-0 border-0 rounded-circle"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
      </div>
      <div>
        <Child name="Aneeta" func={click} />
      </div>
    </>
  );
};

export default Parent;
//UseCallback: un-necessary re-rendering of child components
