import React from "react";
import SessionForm from "../components/Forms/SessionForm";
import { BgImg } from "../components/Background/Bg.styles";
import style from "../components/Forms/Form.module.css";
import { useParams } from "react-router-dom";
import TabDoc from "../components/Tabs/TabDoc";
import Navbar from "../components/Tabs/Navbar";
import { useSelector } from "react-redux";

export default function Session() {
  const { patientId } = useParams();
  const { doctor } = useSelector( state => state.doctorSlice);
  const docId = doctor.id;
  console.log(docId);

  return (
    <section className="main">
      <Navbar />
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
        <TabDoc />
      </div>

        <div
        data-aos="fade-up"
        data-aos-anchor-easing="ease-in-out"
        data-aos-duration="1000" 
          className={
            `d-flex flex-column justify-content-center text-center ` +
            style.formContainer
          }
        >
          <div className={style.title}>
        <h2>Add New Session</h2>
      </div>
          <SessionForm 
          patientId={patientId}
          docId={docId}
           />
        </div>
      </BgImg>
    </section>
  );
}
