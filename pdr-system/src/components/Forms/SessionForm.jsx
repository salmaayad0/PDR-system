import React, { useState } from "react";
import style from './Form.module.css';
import { useDispatch } from "react-redux";
import { addSession } from "../../redux/slices/session";


export default function SessionForm(props) {
  const patientId = props.patientId;

  const [formData, setFormData] = useState({
    diagnosis: "",
    date: "",
    medicine: "",
    medical_analysis: "",
    doc_name: 0,
    pat_name: patientId });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });};

    const validateFormData = (data) => {
      const errors = {};
  
      if (!data.diagnosis) errors.diagnosis = "diagnosis is required";
  
      if (!data.date) errors.date = "date is required";

      if (!data.medicine) errors.medicine = "medicine is required";
  
      return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      // submit form data
      // send data to backend
      dispatch(addSession(formData))
      // if(!error) navigate('/alldoctors');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <form 
      method="post"
      onSubmit={handleSubmit}
      >
        <div className={`mb-2 `+ style.formInput}>
          <input
            className=''
            type="text"
            name="diagnosis"
            placeholder="Medical Diagnosis"
            aria-label="Medical Diagnosis"
            id="Diagnosis"
            value={formData.diagnosis}
            onChange={handleInputChange}
            required
          />
          { errors.diagnosis && <span className="error">{errors.diagnosis}</span>}
        </div>

        <div className={`mb-2 `+ style.formInput}>
          <input
            className=''
            type="date"
            name="date"
            placeholder="Date & Time"
            aria-label="Date & Time"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
          { errors.date && <span className="error">{errors.date}</span>}
        </div>
        <div className={`mb-2 `+ style.formInput}>
          <textarea
            className=''
            type="text"
            name="medicine"
            placeholder="Medicine"
            aria-label="Medicine"
            style={{ height: "200px" }}
            value={formData.medicine}
            onChange={handleInputChange}
            required
          ></textarea>
          { errors.medicine && <span className="error">{errors.medicine}</span>}
        </div>
        
        <div className={`mb-2 `+ style.formInput}>
          <textarea
            className=''
            type="text"
            name="medical_analysis"
            placeholder="Required"
            aria-label="Required"
            style={{ height: "200px" }}
            value={formData.medical_analysis}
            onChange={handleInputChange}
          ></textarea>
        </div>
       
        <div className="text-center">
          <button type="submit" className={style.sumitButton}>
            Add Session
          </button>
        </div>

      </form>
      
    </>
  );
}
