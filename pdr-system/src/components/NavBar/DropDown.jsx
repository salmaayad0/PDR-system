import React from "react";
import { FaUserAlt } from "react-icons/fa";
import AdminLogin from "./AdminLogin";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function DropDown() {
  return (
    <>
      <li className="nav-item dropdown">
        <Link
          className={`nav-link dropdown-toggle `+ style.adminIcon }
          to={'/'}
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaUserAlt className={style.adminIcon} />
        </Link>
        <ul className="dropdown-menu">
          <AdminLogin />
        </ul>
      </li>
    </>
  );
}
