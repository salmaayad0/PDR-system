import React from "react";
import { FaUserAlt } from "react-icons/fa";
import AdminLogin from "./AdminLogin";
import style from "./Nav.module.css";

export default function DropDown() {
  return (
    <>
      <li className="nav-item dropdown">
        <a
          className={`nav-link dropdown-toggle `+ style.adminIcon }
          href="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaUserAlt className={style.adminIcon} />
        </a>
        <ul className="dropdown-menu">
          <AdminLogin />
        </ul>
      </li>
    </>
  );
}
