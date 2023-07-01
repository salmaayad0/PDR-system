import React from 'react'
import { useSelector } from 'react-redux';

export default function DocName() {
    const { error, doctor } = useSelector( state => state.doctorSlice)

  return (
    <>
    { doctor ? doctor.name : error}
    </>
  )
}
