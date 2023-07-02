import React, { useEffect } from "react";
import SideBar from "../components/Profile/SideBar";
import AllSessions from "../components/Profile/AllSessions";
import style from "../components/Profile/Profile.module.css";
import { useDispatch } from "react-redux";
import { patientSessions } from "../redux/slices/session";
import { patientHistory } from "../redux/slices/history";
import { useParams } from "react-router-dom";
import { getOnePatient } from "../redux/slices/patient";

export default function ProfilePatient() {
  const { patientId } = useParams();
  console.log(patientId);

  const dispatchPatient = useDispatch();
  useEffect(() => {
    dispatchPatient(getOnePatient(patientId));
  }, []);

  const dispatchSession = useDispatch();
  useEffect(() => {
    dispatchSession(patientSessions(patientId));
  }, []);

  const dispatchHistory = useDispatch();
  useEffect(() => {
    dispatchHistory(patientHistory(patientId));
  }, []);

  return (
    <>
      <section className="main">
          <div
            data-aos="flip-down"
            data-aos-anchor-easing="ease-in-out"
            data-aos-duration="1000"
            className={style.formContainer}
          >
            <div className={`row ` + style.formContainer}>
              <div className={`col col-lg-2 bg-light ` + style.contet}>
                <SideBar />
              </div>

              <div className={`col col-lg-9 ` + style.contet}>
                <h2 className={style.title}>Your Sessions</h2>
                <AllSessions />
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
