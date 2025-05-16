import React, { useState, useEffect } from "react";

const ResizeComp = () => {
  const [windowidth, setWindowidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    // console.log('started');

    return () => {
      window.removeEventListener("resize", handleResize);
      // console.log('unmount');
    };
  }, []);

  return (
    <>
      <div className="d-flex flex-column justify-content-start align-items-center bg-dark text-white vh-100 ">
        <h2>UseEffect</h2>

        <br />
        <hr />
        <h1>Window Width: {windowidth}px</h1>
      </div>
    </>
  );
};

export default ResizeComp;
