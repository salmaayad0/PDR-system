import React from 'react'
import { deleteDoctor } from '../../redux/slices/doctor';
import { useDispatch } from 'react-redux';

export default function AllDoctors(props) {
  const {id, name, email, phone_number, major, address} = props.doctor;

  const dispatch = useDispatch();

  const deleteHandling = () => {
    dispatch(deleteDoctor(id));
  }

  return (
    <>
      <tr>
      <td>{name}</td>
        <td>{major}</td>
        <th>{phone_number}</th>
        <td>{email}</td>
        <td>{address}</td>
        <td>
          <button className="btn btn-danger btn-sm" 
          onClick={id => deleteHandling(id)}>
            Delete
            </button>
        </td>
      </tr>
  </>
  )
}
