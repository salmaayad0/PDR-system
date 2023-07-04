import React, { useState } from "react";
import style from './Form.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addSession } from "../../redux/slices/session";
import { useNavigate } from "react-router-dom";


export default function SessionForm(props) {
  const patientId = Number(props.patientId);
  const docId = Number(props.docId);

  const dispatch = useDispatch();

  const { error, loading } = useSelector( state => state.sessionSlice )

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    number: 0,
    medical_diagnose: "",
    date: '',
    medicine: "",
    medical_analysis: "",
    doc_name: docId,
    pat_name: patientId
  });

  const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSession(formData));
    if(!error) {
      navigate(`/Viewprofile/${patientId}`)
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
            type="number"
            name="number"
            placeholder="Session Number"
            aria-label="Session Number"
            id="number"
            value={formData.number}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={`mb-2 `+ style.formInput}>
          <input
            className=''
            type="text"
            name="medical_diagnose"
            placeholder="Medical Diagnosis"
            aria-label="Medical Diagnosis"
            id="Diagnosis"
            value={formData.medical_diagnose}
            onChange={handleInputChange}
            required
          />
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
          <button 
          type="submit" 
          className={style.sumitButton}
          >
            Add Session
          </button>
        </div>
        {loading && (
                <div className="d-flex justify-content-center align-items-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
        { error && <span className="error text-danger">{error}</span>}

      </form>
      
    </>
  );
}
