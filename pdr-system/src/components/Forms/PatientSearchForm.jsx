import React from 'react';
import style from "./Form.module.css";

export default function DoctorForm() {
  return (
    <>
    <form method="POST" >
        <div className={`mb-2 ` + style.formInput}>
          <input
            className='form-control form-control-sm '
            type="tel"
            name="phone"
            placeholder="patient phone number"
            aria-label="patient phone number"
            value=''
            onInput=''
          />
          { <span className="error">{}</span>}
        </div>

        <div className="text-center">
          <button type="submit" className={style.sumitButton}>
            Search
          </button>
        { <span className="error">{}</span>}
        </div>
      </form>
    </>
  )
}