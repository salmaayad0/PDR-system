import React from "react";
import { useSelector } from "react-redux";
import AllPatients from "./AllPatients";
import style from "./Tables.module.css";

export default function TablePatient() {
  const { error, loading, patients } = useSelector(
    (state) => state.patientSlice
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
        <table className={`table table-striped ` + style.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Address</th>
              {/* <th>View Session</th> */}
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <AllPatients 
              key={patient.id} 
              patient={patient} 
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
