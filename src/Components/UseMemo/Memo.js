import React, { useState, useMemo } from "react";

const Memo = () => {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0)
  function expensiveTask(num){
    console.log('Expensive');
    for(let i=0; i<=1000000000; i++ ){}
    return num*4
  }
  // const double = expensiveTask(input);
  const double = useMemo(() => expensiveTask(input), [input])

  return (
    <>
      <div className="text-white d-flex justify-content-start align-items-center flex-column pt-4 vh-100"
      style={{ backgroundColor: '#1f3b4d' }}>
        <h1>Memo</h1>
        <br />
        <p>Count: {count}</p>
        <button className="px-4 py-2  border-0 rounded-pill mb-4 text-white bg-info fw-bold fs-4" onClick={()=>{setCount(count+1)}}>Click:</button>
        <input className="p-2 mb-3 border-0 rounded-2" type="number" value={input} onChange={(e)=>{setInput(Number(e.target.value))}} />
         <p>Num: {double}</p>
      </div>
    </>
  );
};

export default Memo;
