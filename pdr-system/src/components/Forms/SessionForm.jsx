import React from "react";
import style from './Form.module.css';


export default function SessionForm() {
  return (
    <>
      <form method="">
        <ul className="list-inline ">
        <li className={`mb-2 `+ style.formInput}>
          <input
            className=''
            type="text"
            name="diagnosis"
            placeholder="Medical Diagnosis"
            aria-label="Medical Diagnosis"
            id="Diagnosis"
            required
          />
        </li>

        <li className={`mb-2 `+ style.formInput}>
          <input
            className=''
            type="date"
            name="date"
            placeholder="Date & Time"
            aria-label="Date & Time"
            required
          />
        </li>
        <li className={`mb-2 `+ style.formInput}>
          <textarea
            className=''
            type="text"
            name="medicine"
            placeholder="Medicine"
            aria-label="Medicine"
            style={{ height: "200px" }}
            required
          ></textarea>
        </li>
        
        <li className={`mb-2 `+ style.formInput}>
          <textarea
            className=''
            type="text"
            name="required"
            placeholder="Required"
            aria-label="Required"
            style={{ height: "200px" }}
            required
          ></textarea>
        </li>
       
        <li className="text-center">
          <button type="submit" className={style.sumitButton}>
            Add Session
          </button>
        </li>

        </ul>
      </form>
      
    </>
  );
}
