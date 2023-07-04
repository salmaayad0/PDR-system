import React from 'react'
import style from "./Tables.module.css";
import { useSelector } from 'react-redux';
import AllDoctors from './AllDoctors'

export default function TableDoctor() {
    const { error, loading, doctors } = useSelector(
        (state) => state.doctorSlice
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
              <th>Major</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <AllDoctors key={doctor.id} doctor={doctor} />
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}
