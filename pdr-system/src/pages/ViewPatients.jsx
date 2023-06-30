import React, { useEffect } from 'react'
import { BgImg } from '../components/Background/Bg.styles'
import { useDispatch } from 'react-redux';
import { getAllPatients } from '../redux/slices/patient';
import TablePatient from '../components/Views/TablePatient';
import style from '../components/Views/Tables.module.css'

export default function ViewPatients() {
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getAllPatients())
    },[]);

  return (
    <>
      <section className="main">
      <BgImg>
      <div className="col px-2">
            <h3 className={style.title}>All Patients</h3>
            <TablePatient />
          </div>
      </BgImg>
    </section>
    </>
  )
}
