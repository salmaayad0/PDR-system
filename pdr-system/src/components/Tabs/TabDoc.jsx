import React from "react";
import style from "../Forms/Form.module.css";
import { Link } from "react-router-dom";

export default function TabDoc() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
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

          <div 
          className="collapse navbar-collapse" 
          id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link
                  className={style.sumitButton + ` nav-link `}
                  to={"/search"}
                >
                  Search Patient
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
