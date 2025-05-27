import React, { useState } from "react";

const Child = React.memo((props) => {
  console.log("Child..............");
  const [value, setValue] = useState(0);
  const btnclick = () => {
    setValue(value + 1);
  };
 
  return (
    <>
      <div className=" text-white d-flex justify-content-center align-items-center flex-column">
        <h1>Child_comp:</h1>
        <button className="py-2 px-4 border-0 rounded" onClick={props.func}>
          {props.name}
        </button>
        <br />
        <h3>Child_Update: {value}</h3>
        <button className="py-2 px-4 border-0 rounded" onClick={btnclick}>
          Click
        </button>
      </div>
    </>
  );
});

export default Child;
//React.memo -> wrap -> component -> thats comp re-render when props chnge/update otherwise not that re-render
//React.memo --> only on value
//we can used the memo or React.memo, It wrap the component, 2 whys wrap the comp as in btm where export comp so just 
// like React.memo(child) .....child here is a comp name so it wrap in it. 
// If used the React word with memo thn not need the import, If we use memo in simple word then it firstly import like useState...useffect

//if we're sending a function thn react.memo won't be able to save/protect from re-rendering so where web used the 
