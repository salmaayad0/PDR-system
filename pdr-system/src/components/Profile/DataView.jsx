import React from 'react';
import style from "./Profile.module.css";

export default function DataView(props) {
    const { name, age, gender, address, phone_number, email } = props.patient;
    
  return (
    <>
     <div>
              <h4 className={style.title}>Patient Data</h4>
              <p className={style.text}>
                <b>Name:</b> {name}
              </p>
              <p className={style.text}>
                <b>Age:</b> {age}
              </p>
              <p className={style.text}>
                <b>Gender:</b> {gender}
              </p>
              <p className={style.text}>
                <b>Phone:</b> {phone_number}
              </p>
              <p className={style.text}>
                <b>email:</b> {email}
              </p>
              <p className={style.text}>
                <b>Address:</b> {address}
              </p>
            </div>
    </>
  )
}
