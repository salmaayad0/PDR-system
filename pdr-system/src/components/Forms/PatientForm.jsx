import React from 'react';
import style from "./Form.module.css";

export default function DoctorForm() {
  return (
    <>
    <form method="POST" >
        <div className={`mb-2 ` + style.formInput}>
          <input
            className='form-control form-control-sm '
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
            value=''
            onInput=''
          />
          { <span className="error">{}</span>}
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input
            className='form-control form-control-sm '
            type="password"
            name="password"
            placeholder="your password"
            aria-label="your password"
            value=''
            onInput=''
          />
          { <span className="error">{}</span>}
        </div>

        <div className="text-center">
          <button type="submit" className={style.sumitButton}>
            Login
          </button>
        { <span className="error">{}</span>}
        </div>
      </form>
    </>
  )
}