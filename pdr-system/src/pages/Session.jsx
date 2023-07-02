import React from "react";
import SessionForm from "../components/Forms/SessionForm";
import { BgImg } from "../components/Background/Bg.styles";
import style from "../components/Forms/Form.module.css";
import { useParams } from "react-router-dom";

export default function Session() {
  const { patientId } = useParams();
  console.log(patientId);

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
          <div className={style.title}>
        <h2>New Session</h2>
      </div>
          <SessionForm patientId={patientId} />
        </div>
      </BgImg>
    </section>
  );
}
