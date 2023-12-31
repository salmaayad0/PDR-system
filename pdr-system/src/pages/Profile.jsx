import React, { useEffect } from "react";
import SideBar from "../components/Profile/SideBar";
import AllSessions from "../components/Profile/AllSessions";
import style from "../components/Profile/Profile.module.css";
import { useDispatch } from "react-redux";
import { patientSessions } from "../redux/slices/session";
import { patientHistory } from "../redux/slices/history";
import { useParams } from "react-router-dom";
import { getOnePatient } from "../redux/slices/patient";
import { BgImg } from "../components/Background/Bg.styles";
import TabAdmin from "../components/Tabs/TabAdmin";

export default function Profile() {
  const { patientId } = useParams();

  const dispatchPatient = useDispatch();
  useEffect(() => {
    dispatchPatient(getOnePatient(patientId));
  });

  const dispatchSession = useDispatch();
  useEffect(() => {
    dispatchSession(patientSessions(patientId));
  });

  const dispatchHistory = useDispatch();
  useEffect(() => {
    dispatchHistory(patientHistory(patientId));
  });

  return (
    <>
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
            data-aos="flip-up"
            data-aos-anchor-easing="ease-in-out"
            data-aos-duration="1000"
            className={style.formContainer}
          >
            <div className={`row ` + style.formContainer}>
              <div className={`col col-lg-2 bg-light ` + style.contet}>
                <SideBar />
              </div>

              <div className={`col col-lg-9 ` + style.contet}>
                <h2 className={style.title}>Patient Sessions</h2>
                <AllSessions />
              </div>
            </div>
          </div>
        </BgImg>
      </section>
    </>
  );
}
