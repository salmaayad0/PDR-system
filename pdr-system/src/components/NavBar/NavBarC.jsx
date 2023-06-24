import React from "react";
import DropDown from "./DropDown";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

function NavBarC() {
  return (
    <nav className={`navbar navbar-expand-lg ` + style.navBg}>
      <div className="container">
        <Link className="logo" to={'/'}>
          PDR system
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <DropDown />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBarC;
