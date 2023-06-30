import React from 'react'

export default function AllDoctors(props) {
  const {id, name, email, phone_number, major, address} = props.doctor;

  return (
    <>
      <tr>
      <td>{name}</td>
        <td>{major}</td>
        <th>{phone_number}</th>
        <td>{email}</td>
        <td>{address}</td>
      </tr>
  </>
  )
}
