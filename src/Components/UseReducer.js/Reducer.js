import React, { useReducer } from "react";

const Reducerfn = (state, action) => {
  if (action.type === 'increment') {
    return state + 1;
  }
};

const initialstate = 10;

const Reducer = () => {
  const [count, dispatch] = useReducer(Reducerfn, initialstate);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2>UseReducer:</h2>
        <p>Count: {count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Click</button>
      </div>
    </>
  );
};

export default Reducer;
