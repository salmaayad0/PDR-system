import React, { useState } from "react";
import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function HistoryFormAdd() {
    const { patient } = useSelector(state => state.patientSlice)
    console.log( patient.id);

  const [formData, setFormData] = useState({
    Diabetes: false,
    Allergies: false,
    Heart_Disease: false,
    High_Blood_Pressure: false,
    High_Cholesterol: false,
    BoneDenisty: false,
    // pat_name: patientId,
  });

  // const dispatch = useDispatch();

  // const navigate = useNavigate();

  const { error, loading } = useSelector( state => state.historySlice )

  const handleInputChange = (event) => {
    const { name } = event.target;
    setFormData({ ...formData, [name]: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(updateHistory({id: patientId, hisObj: formData}));
    // if(!error) {
    //   navigate(`/Viewprofile/${patientId}`)
    // }
  };

  
  return (
    <>
      <form 
      method="PUT"
      onSubmit={handleSubmit}
      >
        <div className={`mb-2 ` + style.formInput}>
          <input
            type="checkbox"
            name="Diabetes"
            id="diabetes"
            checked={formData.Diabetes}
            onChange={handleInputChange}
          />
          <label for="diabetes"> Diabetes</label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input
            type="checkbox"
            name="High_Blood_Pressure"
            id="pressure"
            checked={formData.High_Blood_Pressure}
            onChange={handleInputChange}
          />
          <label for="pressure"> High Blood Pressure </label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input
            type="checkbox"
            name="Heart_Disease"
            id="heart"
            checked={formData.Heart_Disease}
            onChange={handleInputChange}
          />
          <label for="heart"> Heart Disease </label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input
            type="checkbox"
            name="High_Cholesterol"
            id="cholesterol"
            checked={formData.High_Cholesterol}
            onChange={handleInputChange}
          />
          <label for="cholesterol"> Cholesterol </label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input 
          type="checkbox" 
          name="Allergies" 
          id="allergy" 
          checked={formData.Allergies}
          onChange={handleInputChange}
          />
          <label for="allergy"> Allergies </label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input 
          type="checkbox" 
          name="BoneDenisty" 
          id="bone"
          checked={formData.BoneDenisty}
          onChange={handleInputChange} 
          />
          <label for="bone"> Bone denisty </label>
        </div>

        <div className="text-center">
          <button type="submit" className={style.sumitButton}>
            Save
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
