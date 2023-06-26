import React from "react";
import { BgImg } from "../components/Background/Bg.styles";
import PatientForm from "../components/Forms/PatientForm";
import style from "../components/Forms/Form.module.css";

export default function Patient() {
  return (
    <>
    <section className="main">
      <BgImg>
        <div
          data-aos="flip-left"
          data-aos-anchor-easing="ease-in-out"
          data-aos-duration="1500"
          className={
            `d-flex flex-column justify-content-center ` 
            + style.formContainer
          }
        >
          <div className={style.title}>
            <h2>Patient Login</h2>
          </div>
          <PatientForm />
        </div>
      </BgImg>
    </section>
  </>
  )
}
