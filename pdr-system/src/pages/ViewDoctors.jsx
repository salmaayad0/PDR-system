import React, { useEffect } from 'react'
import style from '../components/Views/Tables.module.css'
import { BgImg } from '../components/Background/Bg.styles'
import { useDispatch } from 'react-redux';
import { getAllDoctors } from '../redux/slices/doctor';
import TableDoctor from '../components/Views/TableDoctor';
import TabAdmin from '../components/Tabs/TabAdmin';

export default function ViewDoctors() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllDoctors())
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
          <h2 className={style.title}>All Doctors</h2>
          <TableDoctor />
        </div>
    </BgImg>
  </section>
  </>
  )
}
