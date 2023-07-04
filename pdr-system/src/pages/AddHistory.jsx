import React, { useEffect } from "react";
import { BgImg } from "../components/Background/Bg.styles";
import style from "../components/Forms/Form.module.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import TabAdmin from "../components/Tabs/TabAdmin";
import { getEmailPatient } from "../redux/slices/patient";
import HistoryFormAdd from "../components/Forms/HistoryFormAdd";

export default function AddHistory() {
  const { patEmail } = useParams();
  console.log(patEmail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmailPatient(patEmail));
  });


  
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
          data-aos="fade-up"
          data-aos-anchor-easing="ease-in-out"
          data-aos-duration="1000"
          className={
            `d-flex flex-column justify-content-center text-center ` +
            style.formContainer
          }
        >
          <div className={style.title}>
            <h2>Patient's medical history</h2>
          </div>
          <HistoryFormAdd />
        </div>
      </BgImg>
    </section>
  );
}
