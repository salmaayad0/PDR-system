import React, { useState } from "react";
import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { patientSearch } from "../../redux/slices/patient";
import Profile from "../../pages/Profile";

export default function PatientSearchForm() {
  const [phone_number, setPhone] = useState(0);

  const dispatch = useDispatch();

  const navgate = useNavigate();

  let { loading, error, patient } = useSelector(
    (state) => state.patientSlice
  );

  const handleInputChange = (event) => {
    setPhone(event.target.value);
  };

  const clearForm = () => {
    setPhone(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(patientSearch(phone_number));
    if (error) {
      navgate("/addPatient");
      clearForm();
    } 
    // else {
    //   console.log(patient);
    //   navgate("/profile",{
    //     patient: patient
    //   })
    // }

  };

  return (
    <>
      {patient ? (<Profile patient={patient} /> ) : (
        <>
        <div className={style.title}>
            <h2>Patient Search</h2>
          </div>
          <form 
          method="GET" 
          onSubmit={handleSubmit}
          >
            <div className={`mb-2 ` + style.formInput}>
              <input
                className="form-control form-control-sm "
                type="text"
                name="phone_number"
                placeholder="patient phone number"
                aria-label="patient phone number"
                value={phone_number}
                onChange={handleInputChange}
              />
            </div>

            <div className="text-center">
            <button 
            type="submit" 
            className={style.sumitButton}
            >
                Search
              </button>
              {loading && (
                <div className="d-flex justify-content-center align-items-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </form>
          </>
     )}
    </>
  );
}
