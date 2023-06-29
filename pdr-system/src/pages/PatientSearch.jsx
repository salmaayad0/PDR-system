import React from "react";
import { BgImg } from "../components/Background/Bg.styles";
import style from "../components/Forms/Form.module.css";
import PatientSearchForm from '../components/Forms/PatientSearchForm';

export default function Patient() {
  return (
    <>
    <section className="main">
      <BgImg>
        <div
          data-aos="zoom-in"
          data-aos-anchor-easing="ease-in-out"
          data-aos-duration="1500"
          className={
            `d-flex flex-column justify-content-center ` 
            + style.formContainer
          }
        >
          <PatientSearchForm />
        </div>
      </BgImg>
    </section>
  </>
  )
}
