import React, { useCallback, useState } from "react";
import "./parentComp.css";
import Child from "./Child";
import Todos from "./Todos";

const Parent = () => {
  const [value, setValue] = useState("--");
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // const increment = () => {
  //   setCount((c) => c + 1);
  // };
 const addTodo = useCallback(() => {
  setTodos((t) => [...t, "New Todo"]);
}, []);


  const click = useCallback(() => {
    setValue("Basheer");
  }, []);
  const handle = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  console.log("I'm Parent.....");
  return (
    <>
      <div className="parent-container text-white d-flex justify-content-center align-items-center flex-column vh-100">
        {/* <h1>Parent Comp:</h1> */}
        <h2>Parent: {value}</h2>
        <br />
        <button className="parent p-0 border-0 rounded-circle" onClick={click}>
          Click
        </button>
        <br />
        <h3>Update: {count}</h3>
        <button
          className="parent p-0 border-0 rounded-circle"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
          onClick={handle}
        >
          Click
        </button>

        <hr />
        {/* <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div> */}
       
        <br />
        <div>
          <Child name="Aneeta" func={click} />
        </div>
         <br />
        <div>
          <Todos todos={todos} addTodo={addTodo} />
        </div>
      </div>
    </>
  );
};

export default Parent;
//UseCallback___01: un-necessary re-rendering of child components
// UseCallback: function refernce...........cache/memoize/freez
// when any page render 0r re-render thn all func recreate or create new refernce i.e rfer...A when re-render thn that's refer...B so when refer chnge so child comp render
// so its beauty stop the func -> from re-create but it update by dependency thn both things re-render

//UseCallback___02: Handling Expensive Opration
