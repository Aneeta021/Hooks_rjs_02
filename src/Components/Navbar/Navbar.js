import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-md d-flex align-items-center justify-content-between px-4 ">
            {/* <div className="row"> */}
                {/* ------------ LOGO ------------ */}
                <div className="log ">
                   <a className="navbar-brand text-uppercase" href="#">hooks</a>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="nav-items collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav me-3 mb-2 mb-lg-0">
                        <li className="nav-item px-3">
                            <Link className="nav-link active text-success" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/usestate">UseState</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/useeffect">UseEffect</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/resize">ResizeComp</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/fetching">Fetching</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/usememo">UseMemo</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/usecallback">UseCallback</Link>
                        </li>
                       
                    </ul>
               </div>

               {/* <div className="btn">
                 <button className="btn  rounded-pill bg-primary text-white" type="submit">Make an Appointment</button>
               </div> */}
            {/* </div> */}

        </div>
      </nav>
    </>
  );
};

export default Navbar;
