import React from 'react'

export default function OneSession(props) {
    const{number, medicine, medical_analysis, doc_name, } = props.session;
  return (
    <> 
    <tr>
      <th>{number}</th>
      <td>{medicine}</td>
      <td>{medical_analysis}</td>
      <td>{doc_name}</td>
    </tr>
  </>
  )
}
