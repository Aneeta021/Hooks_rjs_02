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
            <a className="navbar-brand text-uppercase" to="#">
              hooks
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="nav-items collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav me-3 mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <Link
                  className="nav-link active text-success"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/redux">
                  Redux
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usestate">
                  UseState
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  UseEffect
                </Link>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <Link className="dropdown-item text-white" to="/useeffect ">
                      UseEffect
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/resize">
                      ResizeComp
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/fetching">
                      Fetching
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/resize">
                  ResizeComp
                </Link> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usememo">
                  UseMemo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usecallback">
                  UseCallback
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  UseContext
                </Link>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <Link
                      className="dropdown-item text-white"
                      to="/usecontext "
                    >
                      UseContext
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/compa">
                      CompA
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/compb">
                      CompB
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/compc">
                      CompC
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="nav-item submenu ">
                    <Link
                      className="dropdown-item text-white dropdown-toggle"
                      to="#"
                    >
                      SubMenu
                    </Link>
                    <ul>
                      <li>
                        <Link className="dropdown-item text-white" to="/theme">
                          Theme
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <Link className="dropdown-item text-white" to="/useeffect ">
                      UseEffect
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/resize">
                      ResizeComp
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/fetching">
                      Fetching
                    </Link>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useeffect-cleanup">
                      Cleanup Function
                    </Link>
                  </li> */}
                </ul>
                <li className="nav-item">
                  <Link className="nav-link" to="/reducer">
                    UseReducer
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/redux">
                    Redux
                  </Link>
                </li> */}
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
