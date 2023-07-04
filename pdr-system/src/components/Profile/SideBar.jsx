import React from "react";
import style from "./Profile.module.css";
import { useSelector } from "react-redux";
import DataView from "./DataView";
import HistoryView from "./HistoryView";

export default function SideBar() {
  const { error, loading, patient } = useSelector((state) => state.patientSlice);
  
  return (
    <>
      {error && !loading && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ul className={style.sideBar}>
          <li>
            <DataView patient={patient}/>
          </li>

          <li>
            <h5 className={style.title}>Medical History</h5>
            <p className={style.text}>
              <b>{patient.name} has :</b>
            </p>
           <HistoryView />
          </li>
        </ul>
      )}
    </>
  );
}
