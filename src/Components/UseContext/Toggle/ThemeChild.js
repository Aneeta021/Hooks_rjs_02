import React, { useContext } from "react";
import { toggle } from "./ThemeParent";

const ThemeChild = () => {
  const {mode, setMode} = useContext(toggle);
  const handleMode = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };
  console.log("Current mode:", mode); 
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column pt-4">
        <h2>ThemeChild:</h2>
        <br />
        <button className="border-0 rounded px-3 py-2 text-white" style={{backgroundColor: '#1f3b4d'}} onClick={handleMode}>
          Theme
        </button>
      </div>
    </>
  );
};

export default ThemeChild;
