import React from "react";
import { BgImg } from "../components/Background/Bg.styles";
import HistoryForm from "../components/Forms/HistoryForm";
import style from "../components/Forms/Form.module.css";
import { useParams } from "react-router-dom";

export default function History() {
  const { patientId } = useParams();
  console.log(patientId);

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
          <div className={style.title}>
            <h2>Patient's medical history</h2>
          </div>
          <HistoryForm patientId={patientId} />
        </div>
      </BgImg>
    </section>
  );
}
