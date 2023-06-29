import React from "react";
import style from "../Forms/Form.module.css";
import { Link } from "react-router-dom";

export default function TabAdmin() {
  return (
    <>

      <ul className="nav nav-pills m-0">
        <li className="nav-item">
          <button className={style.sumitButton + ` nav-link `} >All Doctors</button>
        </li>
        <li className="nav-item">
          <button className={style.sumitButton + ` nav-link `} >All Patients</button>
        </li>
        <li className="nav-item">
          <Link to="/addDoctor" className={style.sumitButton + ` nav-link `}>
            Add Doctor
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/addPatient" className={style.sumitButton + ` nav-link `}>
            Add Patient
          </Link>
        </li>
      </ul>
    </>
  );
}
