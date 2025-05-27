import React from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render........");
  return (
    <>
      <div className=" text-white d-flex justify-content-center align-items-center flex-column">
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
            })}
            <button className="py-2 px-4 border-0 rounded" onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
};

export default React.memo(Todos);
