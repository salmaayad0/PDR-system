import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePatient } from '../../redux/slices/patient';


export default function AllPatients(props) {
  const { id, name, gender, age, phone_number, email, address} = props.patient;

  const dispatch = useDispatch();

  const deleteHandling = () => {
    dispatch(deletePatient(id));
    window.location.reload();
  }


  return (
    <>
      <tr>
      <td>{name}</td>
        <td>{gender}</td>
        <td>{age}</td>
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
