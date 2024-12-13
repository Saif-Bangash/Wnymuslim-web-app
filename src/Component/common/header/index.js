/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg mx-4">
      <div className="container-fluid">
        <a className="navbar-brand " href="/">
          <img
            src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/60b/22b/9de/60b22b9decb86623177827.png"
            className="d-block mx-auto"
            alt="Brand Logo"
          />
        </a>

        <button
          className="navbar-toggler custom-toggler m-auto mx-4 me-md-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item  px-2">
              <a className="nav-link text-dark" aria-current="page" href="/">
                Home
              </a>
            </li>
            <hr
              style={{
                marginTop: "-5px",
                marginBottom: "0",
                padding: "1px",
                color: "brown",
              }}
            />
            <li className="nav-item px-2">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item text-dark" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-dark" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-dark" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item  px-2">
              <a className="nav-link text-dark" href="/">
                About
              </a>
            </li>
            <li className="nav-item  px-2">
              <a className="nav-link text-dark" href="/">
                Resources
              </a>
            </li>
            <li className="nav-item    px-2">
              <a className="nav-link text-dark" href="/">
                Opportunities
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link text-dark" href="/">
                Media
              </a>
            </li>
            <li className="nav-item   px-2">
              <a className="nav-link text-dark" href="/">
                Forms
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link text-dark" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
