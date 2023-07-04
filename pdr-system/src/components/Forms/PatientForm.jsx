import React, { useState } from 'react';
import style from "./Form.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getEmailPatient, loginPatient } from '../../redux/slices/patient';
import { useNavigate } from 'react-router-dom';

export default function DoctorForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const dispatchEmail = useDispatch();

  let { loading, error, patient, patientByEmail } = useSelector((state) => state.patientSlice);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
     dispatch(loginPatient(formData))
    if (patient){
      dispatchEmail(getEmailPatient(formData.email))
      if(patientByEmail){
        let patientId = patientByEmail.id
        navigate(`/report/${patientId}`)
      }
      else{
        console.log('by email error');
      }
    }
    else if(error){
      console.log(error);
    }
  };


  return (
    <>
    <form 
    method="POST" 
    onSubmit={handleSubmit}
    >
        <div className={`mb-2 ` + style.formInput}>
          <input
            className='form-control form-control-sm '
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input
            className='form-control form-control-sm '
            type="password"
            name="password"
            placeholder="your password"
            aria-label="your password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="text-center">
          <button type="submit" className={style.sumitButton}>
            Login
          </button>
          {loading && (
                <div className="d-flex justify-content-center align-items-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
        { error && <span className="error text-danger">{error}</span>}
        </div>
      </form>
    </>
  )
}