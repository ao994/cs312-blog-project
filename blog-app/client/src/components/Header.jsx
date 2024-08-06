import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <>
        <div id="flex-container">
          <header className="d-flex flex-wrap justify-content-end justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
              <NavLink
                className="d-inline-flex link-body-emphasis text-decoration-none"
                to={`/`}
              >
                Home
              </NavLink>
            </div>

            <div>
              <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
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

            <div className="col-md-3 text-end">
              <NavLink to={`/login`}>
              <button type="button" className="btn btn-outline-primary me-2">
              {!(sessionStorage.username) ? (<>Logout</>) : (<>Login</>)}
              </button>
              </NavLink>
              <button type="button" className="btn btn-primary">
                Sign-up
              </button>
            </div>
          </header>
        </div>
    </>
  );
}

export default Header;
