import React from 'react'
import style from './Profile.module.css'

export default function OneSession(props) {
    const{ id, number, medicine, medical_analysis, doc_name } = props.session;
    
  return (
    <> 
    <tr>
      <th className={style.text}>{number}</th>
      <td className={style.text}>diagnosis</td>
      <td className={style.text}>{medicine}</td>
      <td className={style.text}>{medical_analysis}</td>
      <td className={style.text}>{doc_name}</td>
    </tr>
  </>
  )
}
