import React from "react";
import { BgImg } from "../components/Background/Bg.styles"
import style from "../components/Forms/Form.module.css"
import Navbar from "../components/Tabs/Navbar"
import PatientSearchFormDoc from "./PatientSearchFormDoc";

export default function Patient() {
  return (
    <>
    <section className="main">
      <Navbar />
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
          <PatientSearchFormDoc />
        </div>
      </BgImg>
    </section>
  </>
  )
}
