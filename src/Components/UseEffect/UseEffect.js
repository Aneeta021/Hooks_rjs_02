import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds(prev => prev + 1);
  //   }, 1000);

    // Cleanup
  //   return () => clearInterval(interval);
  // }, []); 

  //  Variation #_01..........rener every time
  // useEffect(() => {
  //   alert("every time render");
  // });

  //  Variation #_02..........rener single time
  //    useEffect(() => {
  //   alert("run only Single time render");
  // },[]);

  //  Variation #_03..........run on every rener when state updated..........nd have multiple state updated
  //  useEffect(() => {
  //     alert("run only Single time render");
  //   },[count]);

  //  Variation #_04..........clean up
  // useEffect(() => {
  //   alert("run");
  //   return () => {
  //     alert("2nd...clean up....unmute");
  //   };
  // }, [count]);
  // console.log("stop");

  const click = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center bg-dark text-white vh-100 ">
        <h2>UseEffect</h2>
        <h2>{count}</h2>
        <button className="border-0 px-4 py-2 text-black" onClick={click}>
          Click me
        </button>
        <br/>
        <hr/>
         <p className="text-white">{seconds} seconds passed:</p>
      </div>
    </>
  );
};

export default UseEffect;
