import React, { createContext, useState } from "react";
import ThemeChild from "./ThemeChild";

const toggle = createContext();
const ThemeParent = () => {
  const [mode, setMode] = useState("light");

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        {/* <h2>ThemeParent:</h2> */}
        
        <toggle.Provider value={{ mode, setMode }}>
          <div
            className="child"
            style={{
              backgroundColor: mode === "light" ? " #3e7c7c" : " #1f3b4d",
              color: mode === "light" ? "#000" : "#fff",
              height: "100vh",
              width: "100%",
            }}
          >
            <ThemeChild />
          </div>
        </toggle.Provider>
      </div>
    </>
  );
};

export default ThemeParent;
export { toggle };
