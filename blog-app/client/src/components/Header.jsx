import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <>
        <div id="flex-container">
          <header className="d-flex flex-wrap justify-content-end justify-content-right py-3 mb-4 border-bottom">
            <div>
            <div className="nav col-12 col-md-auto mb-2 justify-content-right mb-md-0">
            <NavLink
                className="nav-link px-2"
                to={`/`}
              >
                Home
              </NavLink>
            </div>
              
            </div>

            <div>
              <ul className="nav col-12 col-md-auto mb-2 justify-content-right mb-md-0">
              {(sessionStorage.username) ? (
                <li>
                  <NavLink 
                    className="nav-link px-2"
                    to={`/${props.username}`}
                  >
                    My Profile
                  </NavLink>
                </li>
              ) : (<> </>)}
                <li>
                  <NavLink 
                    className="nav-link px-2"
                    to={`/`}
                  >
                    Discover
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="nav-link px-2"
                    to={`/`}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="text-end">
              <NavLink to={`/login`}>
              <button type="button" className="btn btn-outline-primary me-2">
              {(sessionStorage.username) ? (<>Logout</>) : (<>Login</>)}
              </button>
              </NavLink>

              {!(sessionStorage.username) ? (<>
                <NavLink to={`/signup`}>
                <button type="button" className="btn btn-primary">
                Sign-up
              </button>
              </NavLink>
              </>) : (<></>)}
            </div>
          </header>
        </div>
    </>
  );
}

export default Header;
