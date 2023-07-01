import React from 'react'
import { BgImg } from '../components/Background/Bg.styles'
import style from '../components/Forms/Form.module.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    <section className="main">
      <BgImg>
        <div
        data-aos="flip-left"
        data-aos-anchor-easing="ease-in-out"
        data-aos-duration="1500" 
          className={
            `d-flex flex-column justify-content-center align-item-center text-center ` +
            style.formContainer
          }
        >
        <div className={style.title}>
        <h2>Ooops...wrong path go back to</h2>
        <Link to={'/'} className={style.sumitButton}>
            HOME
        </Link>
      </div>
        </div>
      </BgImg>
    </section>
    </>
  )
}
