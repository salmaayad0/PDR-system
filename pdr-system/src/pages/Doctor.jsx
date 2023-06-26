import React from "react";
import { BgImg } from "../components/Background/Bg.styles";
import DoctorForm from "../components/Forms/DoctorForm";
import style from "../components/Forms/Form.module.css";

export default function Doctor() {
  return (
    <>
      <section className="main">
        <BgImg>
          <div
            data-aos="flip-right"
            data-aos-anchor-easing="ease-in-out"
            data-aos-duration="1500"
            className={
              `d-flex flex-column justify-content-center ` 
              + style.formContainer
            }
          >
            <div className={style.title}>
              <h2>Doctor Login</h2>
            </div>
            <DoctorForm />
          </div>
        </BgImg>
      </section>
    </>
  );
}
