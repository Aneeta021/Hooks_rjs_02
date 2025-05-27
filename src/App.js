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
import UseContext from "./Components/UseContext/UseContext";
import CompA from "./Components/UseContext/CompA";
import CompB from "./Components/UseContext/CompB";
import CompC from "./Components/UseContext/CompC";
import Theme from "./Components/UseContext/Toggle/ThemeChild";
import ThemeParent from "./Components/UseContext/Toggle/ThemeParent";
import Reducer from "./Components/UseReducer.js/Reducer";
import ReduxApp from "./Components/UseRedux/ReduxApp";

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
            <Route path="/usecontext" element={<UseContext/>}></Route>
            {/* <Route path="/compa" element={<CompA/>}></Route>
            <Route path="/compb" element={<CompB/>}></Route>
            <Route path="/compc" element={<CompC/>}></Route> */}
            <Route path="/theme" element={<ThemeParent/>}></Route> 
            <Route path="/reducer" element={<Reducer/>}></Route> 
            <Route path="/redux" element={<ReduxApp/>}></Route> 
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
