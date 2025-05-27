import React, { createContext, useState } from "react";
import CompA from "./CompA";

 const myName = createContext();
const UseContext = () => {
  const [name, setName] = useState("Aneeta");
  const handleName=()=>{
    setName('Shoaib')
    // setName((preN)=>preN + "--My Love name is Aneeta--")
    // setName(name + "--My Love name is Aneeta--")
  }
 
  return (
    <>
      <div className="parent-container text-white d-flex justify-content-center align-items-center flex-column vh-100">
        <h2>UseContext:</h2>
        <h2>{name}</h2>
        <button className="border-0 rounded text-success" onClick={handleName}>Update_Name:</button>
        <br />
        {/* <div>
          <CompA name={name} />
        </div> */}
        <myName.Provider value={name}>
          <CompA/>
       </myName.Provider>
      </div>
    </>
  );
};

export default UseContext;
export {myName}











//UseContext: Stp_01...crt-cntxt
// Stp_02...wrap all child inside a provider
//Stp_03...pass-vlu
//Stp_04...cnsmr(cnsum it go to where wanna cnsm)
//Prop Drilling: A pattern in react where pass data frm a parent comp to deeply nested child components thr multiple layers of comps, even intermediate comps don't need the data

//As that comp tree deepens, prop drilling can make the code more complx nd harder to maintain but passing upto 1 or 2 levels is probably fine.....nd hrdr in more thn tht
