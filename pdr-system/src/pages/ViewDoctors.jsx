import React, { useEffect } from 'react'
import style from '../components/Views/Tables.module.css'
import { BgImg } from '../components/Background/Bg.styles'
import { useDispatch } from 'react-redux';
import { getAllDoctors } from '../redux/slices/doctor';
import TableDoctor from '../components/Views/TableDoctor';

export default function ViewDoctors() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllDoctors())
      },[]);

  return (
    <>
    <section className="main">
    <BgImg>
    <div className="col px-2">
          <h3 className={style.title}>All Doctors</h3>
          <TableDoctor />
        </div>
    </BgImg>
  </section>
  </>
  )
}
