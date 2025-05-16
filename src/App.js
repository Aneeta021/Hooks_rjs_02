import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import UseState from "./Components/UseState/UseState";
import UseEffect from "./Components/UseEffect/UseEffect";
import ResizeComp from "./Components/UseEffect/ResizeComp";
import Fetching from "./Components/UseEffect/Fetching";
import UseMemo from "./Components/UseMemo/Memo";
import UseCallback from "./Components/UseCallback/Parent";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <div>
        <Router>
           <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/usestate" element={<UseState/>}></Route>
            <Route path="/useeffect" element={<UseEffect/>}></Route>
            <Route path="/resize" element={<ResizeComp/>}></Route>
            <Route path="/fetching" element={<Fetching/>}></Route>
            <Route path="/usememo" element={<UseMemo/>}></Route>
            <Route path="/usecallback" element={<UseCallback/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
