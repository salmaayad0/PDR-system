import React from "react";
import { BgImg } from "../components/Background/Bg.styles";
import style from "../components/Forms/Form.module.css";
import TabAdmin from "../components/Tabs/TabAdmin";
import PatientSearchForm from "../components/Forms/PatientSearchForm";

export default function Admin() {
  return (
    <section className="main">
    <BgImg>
      <div
        data-aos="fade-down"
        data-aos-anchor-easing="ease-in-out"
        data-aos-duration="1000"
        className={
          `d-flex flex-column justify-content-center w-100 align-items-center ` 
          + style.formContainer
        }
      >
        <TabAdmin />
      </div>

      <div
        data-aos="fade-down"
        data-aos-anchor-easing="ease-in-out"
        data-aos-duration="1000"
        className={
          `d-flex flex-column justify-content-center ` 
          + style.formContainer
        }
      >
        <p className={`text-center ` + style.title}>Search Patient</p>
        <PatientSearchForm />
      </div>
    </BgImg>
  </section>
  )
}
