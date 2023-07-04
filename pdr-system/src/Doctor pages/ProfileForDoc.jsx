import React, { useEffect } from "react";
import SideBar from "../components/Profile/SideBar";
import AllSessions from "../components/Profile/AllSessions";
import style from "../components/Profile/Profile.module.css";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BgImg } from "../components/Background/Bg.styles";
import { getOnePatient } from "../redux/slices/patient";
import { patientSessions } from "../redux/slices/session";
import { patientHistory } from "../redux/slices/history";
import Navbar from "../components/Tabs/Navbar";
import { getOneDoctor } from "../redux/slices/doctor";
import TabDoc from "../components/Tabs/TabDoc";

export default function ProfileForDoc() {
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

  const dispatch = useDispatch();
  const doc = localStorage.getItem("docLogin");
  if (doc === null || doc === undefined) {
    console.log('not');
  } else {
    console.log(doc);
    dispatch(getOneDoctor(doc)); 
  }

  return (
    <>
      <section className="main">
      <Navbar />
        <BgImg>
          <div
            data-aos="flip-down"
            data-aos-anchor-easing="ease-in-out"
            data-aos-duration="1000"
            className={style.formContainer}
          >
            <TabDoc />
            <div className={`row ` + style.formContainer}>
              <div className={`col col-lg-2 bg-light ` + style.contet}>
                <SideBar />
              </div>

              <div className={`col col-lg-9 ` + style.contet}>
                <h2 className={style.title}>Patient Sessions</h2>
                <div>
                  <Link
                    className={style.sumitButton + ` nav-link `}
                    to={`/session/${patientId}`}
                  >
                    Add Session
                  </Link>

                  <Link
                    className={style.sumitButton + ` nav-link `}
                    to={`/history/${patientId}`}
                  >
                    Update History
                  </Link>
                </div>
                <AllSessions />
              </div>
            </div>
          </div>
        </BgImg>
      </section>
    </>
  );
}
