import React from "react";
import { decNum, incNum } from "./Actions/Index";
import { useSelector, useDispatch } from "react-redux";
// import {state} from './Reducer/Reduer'


const ReduxApp = () => {
    const state = useSelector(state =>state.Reducerfn)
    const dispatch = useDispatch()
    console.log(state)
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2>ReduxApp:</h2>
        <h1>Inc_&_Dec Counter</h1>
        <h4>Using React & Redux: {state}</h4>

        <div className="counter d-flex justify-content-center align-items-center mt-3 ">
            <button className="py-2 px-3 border-0 " onClick={()=>dispatch(incNum()) }>Plus</button>
            <button className="py-2 px-3 border-0 " onClick={()=>dispatch(decNum())}>Minus</button>
            {/* <a className="counter_minus" title="Decrement"><span> - </span></a>
            <input type="text" name="" id="" value='0' />
            <a className="counter_plus" title="Increment"><span> + </span></a> */}
        </div>
      </div>
    </>
  );
};

export default ReduxApp;
