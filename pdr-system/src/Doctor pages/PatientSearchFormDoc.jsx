import React, { useState } from "react";
import style from "../components/Forms/Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { patientSearch } from "../redux/slices/patient";


export default function PatientSearchFormDoc() {
  const [phone_number, setPhone] = useState(0);

  const dispatch = useDispatch();

  const { loading, error, patient } = useSelector(
    (state) => state.patientSlice
  );

  const navgate = useNavigate();

  const handleInputChange = (event) => {
    setPhone(event.target.value);
  };

  // const clearForm = () => {
  //   setPhone(0);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(patientSearch(phone_number));
    if(error){
    } 
    else if(patient) {
      let patientId = patient.id;
      navgate(`/Viewprofile/${patientId}`)
      return patient
    }

  };

  return (
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
            </div>
            {error && <span className="error text-danger">{error}</span>}
            {loading && (
                <div className="d-flex justify-content-center align-items-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
          </form>
          </>
  );
}
