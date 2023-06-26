import React from "react";
import SessionForm from "../components/Forms/SessionForm";
import { BgImg } from "../components/Background/Bg.styles";
import style from "../components/Forms/Form.module.css";

export default function AddSession() {
  return (
    <section className="main">
      <BgImg>
        <div
        data-aos="flip-left"
        data-aos-anchor-easing="ease-in-out"
        data-aos-duration="1500" 
          className={
            `d-flex flex-column justify-content-center text-center ` +
            style.formContainer
          }
        >
          <SessionForm />
        </div>
      </BgImg>
    </section>
  );
}
