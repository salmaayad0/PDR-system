import React from "react";
import style from "../NavBar/Nav.module.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("docLogin");
    navigate('/');
    window.location.reload();
  };

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
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link
              to={"/"}
              className='nav-link '
              type="submit"
              onClick={handleLogout}
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
