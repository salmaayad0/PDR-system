import React, { useState } from 'react';
import style from "./Form.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getEmailDoc, loginDoctor } from '../../redux/slices/doctor';
import { useNavigate } from 'react-router-dom';

export default function DoctorForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const dispatchEmail = useDispatch();

  const { loading, error, doctor, doctorByEmail } = useSelector((state) => state.doctorSlice);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
     dispatch(loginDoctor(formData))
    if (doctor){
      dispatchEmail(getEmailDoc(formData.email))
      if(doctorByEmail){
        let id = doctorByEmail.id
        navigate(`/search`)
        localStorage.setItem("docLogin", id);
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