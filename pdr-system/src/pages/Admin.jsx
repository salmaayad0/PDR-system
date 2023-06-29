import React from "react";
import { BgImg } from "../components/Background/Bg.styles";
import style from "../components/Forms/Form.module.css";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <section className="main">
    <BgImg>
      <div
        data-aos="flip-right"
        data-aos-anchor-easing="ease-in-out"
        data-aos-duration="1500"
        className={
          `d-flex flex-column justify-content-center w-100 align-items-center ` 
          + style.formContainer
        }
      >
        <div className="text-center">
          <Link to="/addDoctor" className={style.sumitButton}>
            Add Doctor
          </Link>
        </div>

        <div className="text-center">
          <Link to="/addPatient" className={style.sumitButton}>
            Add Patient
          </Link>
        </div>
      </div>
    </BgImg>
  </section>
  )
}
