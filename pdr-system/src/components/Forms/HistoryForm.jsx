import React, { useState } from "react";
import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateHistory } from "../../redux/slices/history";

export default function HistoryForm(props) {
  const patientId = props.patientId;

  const [formData, setFormData] = useState({
    Diabetes: false,
    Cancer: false,
    Heart_Disease: false,
    High_Blood_Pressure: false,
    High_Cholesterol: false,
    pat_name: patientId,
  });

  const dispatch = useDispatch();

  const { error } = useSelector( state => state.historySlice )

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateHistory(formData, patientId));
    if(!error) console.log('done');
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
            value={formData.Diabetes}
            onChange={handleInputChange}
          />
          <label for="diabetes"> Diabetes</label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input
            type="checkbox"
            name="High_Blood_Pressure"
            id="pressure"
            alue={formData.High_Blood_Pressure}
            onChange={handleInputChange}
          />
          <label for="pressure"> High Blood Pressure </label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input
            type="checkbox"
            name="Heart_Disease"
            id="heart"
            value={formData.Heart_Disease}
            onChange={handleInputChange}
          />
          <label for="heart"> Heart Disease </label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input
            type="checkbox"
            name="High_Cholesterol"
            id="cholesterol"
            value={formData.High_Cholesterol}
            onChange={handleInputChange}
          />
          <label for="cholesterol"> Cholesterol </label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input type="checkbox" name="allergy" id="allergy" />
          <label for="allergy"> Allergies </label>
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input type="checkbox" name="bone" id="bone" />
          <label for="bone"> Bone denisty </label>
        </div>

        <div className="text-center">
          <button type="submit" className={style.sumitButton}>
            Save
          </button>
        </div>
      </form>
    </>
  );
}
