import React from "react";
import { FaUserAlt } from "react-icons/fa";
import AdminLogin from "./AdminLogin";

export default function DropDown() {
  return (
    <>
      <li className="nav-item dropdown">
      <ul className="dropdown-menu">
          <AdminLogin />
        </ul>

        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaUserAlt />
        </a>
        
      </li>
    </>
  );
}
