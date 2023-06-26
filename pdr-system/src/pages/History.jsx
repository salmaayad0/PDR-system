import React from "react";
import { BgImg } from "../components/Background/Bg.styles";
import HistoryForm from "../components/Forms/HistoryForm";
import style from "../components/Forms/Form.module.css";

export default function History() {
  return (
    <section className="main">
      <BgImg>
        <div
         data-aos="flip-right"
         data-aos-anchor-easing="ease-in-out"
         data-aos-duration="1500"
          className={
            `d-flex flex-column justify-content-center text-center ` +
            style.formContainer
          }
        >
          <HistoryForm />
        </div>
      </BgImg>
    </section>
  );
}
