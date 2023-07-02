import React from "react";
import { useSelector } from "react-redux";
import OneSession from "./OneSession";
import style from "./Profile.module.css";

export default function AllSessions(props) {
  // const patientId = props.patientId;
  
  const { error, loading, sessions } = useSelector(
    (state) => state.sessionSlice
  );

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
        <table className="table table-striped">
          <thead>
            <tr>
              <th className={style.text}>id</th>
              <th className={style.text}>Date</th>
              <th className={style.text}>Diagnosis</th>
              <th className={style.text}>Medicien</th>
              <th className={style.text}>medical analysis</th>
              <th className={style.text}>doctor name</th>
              {/* <th className={style.text}>Add Session</th>
              <th className={style.text}>Add History</th> */}
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <OneSession 
              key={session.id} 
              session={session} 
              // patientId={patientId} 
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
