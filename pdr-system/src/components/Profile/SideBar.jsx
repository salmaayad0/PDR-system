import React from "react";
import style from "./Profile.module.css";
import { useSelector } from "react-redux";

export default function SideBar(props) {
  const { id, 
    name, 
    age, 
    gender, 
    address, 
    phone_number, 
    email } = props.patient;

  const { error, loading, history } = useSelector(
    (state) => state.patientSlice
  );

  const {
    Diabetes,
    Cancer,
    Heart_Disease,
    High_Blood_Pressure,
    High_Cholesterol,
  } = history;

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
            <div>
              <h4 className={style.title}>Patient Data</h4>
              <p className={style.text}>
                <b>Name:</b> {name}
              </p>
              <p className={style.text}>
                <b>Age:</b> {age}
              </p>
              <p className={style.text}>
                <b>Gender:</b> {gender}
              </p>
              <p className={style.text}>
                <b>Phone:</b> {phone_number}
              </p>
              <p className={style.text}>
                <b>email:</b> {email}
              </p>
              <p className={style.text}>
                <b>Address:</b> {address}
              </p>
            </div>
          </li>

          <li>
            <h5 className={style.title}>Medical History</h5>
            <p className={style.text}>
              <b>{name} has :</b>
            </p>
            <div>
              <p className={style.text}>
                {Diabetes && <span>Diabetes</span>}
                </p>
              <p className={style.text}>
                {Cancer && <span>Cancer</span>}
                </p>
              <p className={style.text}>
                {Heart_Disease && <span>Heart Disease</span>}
              </p>
              <p className={style.text}>
                {High_Blood_Pressure && <span>High Blood Pressure</span>}
              </p>
              <p className={style.text}>
                {High_Cholesterol && <span>High Cholesterol</span>}
              </p>
            </div>
          </li>
        </ul>
      )}
    </>
  );
}
