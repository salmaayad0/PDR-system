import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { patientSessions } from '../../redux/slices/patient';
import style from './Tables.module.css'

export default function AllPatients(props) {
  const {id, name, gender, age, phone_number, email, address} = props.patient;

  // const dispatch = useDispatch();

  // const handleViewSessions = () => {
  //   dispatch(patientSessions(id))
  // }


  return (
    <>
      <tr>
      <td>{name}</td>
        <td>{gender}</td>
        <td>{age}</td>
        <th>{phone_number}</th>
        <td>{email}</td>
        <td>{address}</td>
        {/* <td>
          <button 
          onClick={id => handleViewSessions(id)} 
          className={style.sumitButton}>
            View
          </button>
        </td> */}
      </tr>
  </>
  )
}
