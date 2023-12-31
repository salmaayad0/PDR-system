import React, { useEffect } from "react";
import { BgImg } from "../components/Background/Bg.styles";
import HistoryForm from "../components/Forms/HistoryForm";
import style from "../components/Forms/Form.module.css";
import { useParams } from "react-router-dom";
import TabDoc from "../components/Tabs/TabDoc";
import Navbar from "../components/Tabs/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { patientHistory } from "../redux/slices/history";

export default function History() {
  const { patientId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(patientHistory(patientId));
  });

  const { history } = useSelector( state => state.historySlice)
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
            <h2>Patient's medical history</h2>
          </div>
          <HistoryForm 
          patientId={patientId} 
          historyData ={history}
          />
        </div>
      </BgImg>
    </section>
  );
}
