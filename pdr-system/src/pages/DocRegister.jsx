import React from 'react'
import { BgImg } from '../components/Background/Bg.styles'
import style from "../components/Forms/Form.module.css"
import DocReg from '../components/Forms/DocReg'

export default function DocRegister() {
  return (
    <section className="main">
      <BgImg>
        <div
        data-aos="flip-left"
        data-aos-anchor-easing="ease-in-out"
        data-aos-duration="1500" 
          className={
            `d-flex flex-column justify-content-center text-center ` +
            style.formContainer
          }
        >
          <div className={style.title}>
        <h2>Add New Doctor</h2>
      </div>
          <DocReg />
        </div>
      </BgImg>
    </section>
  )
}
