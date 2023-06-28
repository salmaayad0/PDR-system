import React, { useState } from "react";
import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { patientSearch } from "../../redux/slices/patient";

export default function DoctorForm() {
  const [phone_number, setPhone] = useState(0);

  const dispatch = useDispatch();

  const navgate = useNavigate();

  const { loading, error } = useSelector(
    (state) => state.patientSlice
  );

  const handleInputChange = (event) => {
    const phone_number = event.target.value;
    setPhone(phone_number);
  };

  const clearForm = () => {
    setPhone(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(patientSearch(phone_number));
    if (!error) {
      navgate("/");
      console.log("accepted");
      clearForm();
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <form method="GET" 
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
          <button type="submit" className={style.sumitButton}>
            Search
          </button>

      {loading && (
          <div className="d-flex justify-content-center align-items-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {error && 
           <>
            <p>Not Exist</p>
            <Link to={"/"} 
            className={style.sumitButton} 
            >Add Patient</Link>
          </> }
        </div>
      </form>
    </>
  );
}
