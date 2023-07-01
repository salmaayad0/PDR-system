import React, { useEffect } from 'react'
import { BgImg } from '../components/Background/Bg.styles'
import { useDispatch } from 'react-redux';
import { getAllPatients } from '../redux/slices/patient';
import TablePatient from '../components/Views/TablePatient';
import style from '../components/Views/Tables.module.css'
import TabAdmin from '../components/Tabs/TabAdmin';

export default function ViewPatients() {
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getAllPatients())
    },[]);

  return (
    <>
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
      className="col px-2 my-3">
            <h2 className={style.title}>All Patients</h2>
            <TablePatient />
          </div>
      </BgImg>
    </section>
    </>
  )
}
