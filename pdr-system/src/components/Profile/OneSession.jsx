import React, { useEffect } from "react";
import style from "./Profile.module.css";
import { useDispatch } from "react-redux";
import { getOneDoctor } from "../../redux/slices/doctor";
import DocName from "./DocName";

export default function OneSession(props) {
  const doc = props.doc;
  const { 
    number, 
    date, 
    medical_diagnose, 
    medicine, 
    medical_analysis, 
    doc_name } = props.session;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneDoctor(doc));
    console.log(doc);
  });

  return (
    <>
      <tr>
        <td className={style.text}>{number}</td>
        <td className={style.text}>{date}</td>
        <td className={style.text}>{medical_diagnose}</td>
        <td className={style.text}>{medicine}</td>
        <td className={style.text}>{medical_analysis}</td>
        {/* <td className={style.text}>{doc_name}</td> */}
        {/* <td className={style.text}>
          <DocName />
        </td> */}
      </tr>
    </>
  );
}
