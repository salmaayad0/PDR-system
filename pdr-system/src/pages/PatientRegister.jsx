import React from 'react'
import { BgImg } from '../components/Background/Bg.styles'
import style from "../components/Forms/Form.module.css"
import PatientReg from '../components/Forms/PatientReg'
import TabAdmin from '../components/Tabs/TabAdmin'

export default function PatientRegister() {
  return (
    <section className="main">
      <BgImg>
      <div
        data-aos="fade-down"
        data-aos-anchor-easing="ease-in-out"
        data-aos-duration="1000"
        className={
          `d-flex flex-column justify-content-center w-100 align-items-center ` 
          + style.formContainer
        }
      >
        <TabAdmin />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-easing="ease-in-out"
        data-aos-duration="1000" 
          className={
            `d-flex flex-column justify-content-center text-center ` +
            style.formContainer
          }
        >
          <div className={style.title}>
        <h2>Add New Patient</h2>
      </div>
          <PatientReg />
        </div>
      </BgImg>
    </section>
  )
}
