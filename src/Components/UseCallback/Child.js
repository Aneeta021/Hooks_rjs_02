import React from "react";

const Child = React.memo((props) => {
  console.log("Child..............");
  return (
    <>
      <div>
        <h1>Child</h1>
        <button onClick={props.func}>
          {props.name}
        </button>
      </div>
    </>
  );
});

export default Child;
//React.memo -> wrap -> component -> thats comp re-render when props chnge/update otherwise not that re-render
//React.memo --> only on value 

//if we're sending a function thn react.memo won't be able to save/protect from re-rendering
