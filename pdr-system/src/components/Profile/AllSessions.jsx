import React from "react";
import { useSelector } from "react-redux";
import OneSession from "./OneSession";
import style from "./Profile.module.css";

export default function AllSessions() {
  const { loading, sessions } = useSelector(
    (state) => state.sessionSlice
  );

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th className={style.text}>id</th>
              <th className={style.text}>Date</th>
              <th className={style.text}>Diagnosis</th>
              <th className={style.text}>Medicien</th>
              <th className={style.text}>medical analysis</th>
              <th className={style.text}>doctor name</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <OneSession 
              key={session.id} 
              session={session} 
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
