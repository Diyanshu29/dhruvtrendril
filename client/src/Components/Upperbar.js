// navigation bar
import React from "react";
import { NavLink } from "react-router-dom";

export default function Upperbar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand me-2" href="https://mdbgo.com/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2801/2801829.png"
                height="16"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>

            {/* <button
              data-mdb-collapse-init
              className="navbar-toggler"
              type="button"
              data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button> */}

            <div className="collapse navbar-collapse" id="navbarButtonsExample">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    job portal
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    jobs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    profiles
                  </a>
                </li>
                <li>
                  <input
                    className="form-control me-2 form-control form-control-lg"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </li>
              </ul>

              <div className="d-flex align-items-center">
                <NavLink
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg mx-3"
                >
                  Sign-up
                </NavLink>
                {/* <button
                  data-mdb-ripple-init
                  type="button"
                  className="btn btn-link px-3 me-2"
                >
                  Login
                </button>
                <button
                  data-mdb-ripple-init
                  type="button"
                  className="btn btn-primary me-3"
                >
                  Sign up for free
                </button>
                <a
                  data-mdb-ripple-init
                  className="btn btn-dark px-3"
                  href="https://github.com/mdbootstrap/mdb-ui-kit"
                  role="button"
                >
                  <i className="fab fa-github"></i>
                </a> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
