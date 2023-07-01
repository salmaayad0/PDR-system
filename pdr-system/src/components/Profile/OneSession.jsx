import React, { useEffect } from "react";
import style from "./Profile.module.css";
import { useDispatch } from "react-redux";
import { getOneDoctor } from "../../redux/slices/doctor";
import DocName from "./DocName";
import { Link } from "react-router-dom";

export default function OneSession(props) {
  const { number, medicine, medical_analysis, doc_name } = props.session;

  const patientId = props.patientId;
  console.log(patientId);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneDoctor(doc_name));
  });

  return (
    <>
      <tr>
        <td className={style.text}>{number}</td>
        <td className={style.text}>Date</td>
        <td className={style.text}>diagnosis</td>
        <td className={style.text}>{medicine}</td>
        <td className={style.text}>{medical_analysis}</td>
        <td className={style.text}>
          <DocName />
        </td>
        <td className={style.text}>
          <Link 
          className={style.sumitButton + ` nav-link `} 
          to={"/session"}
          >
            Add Session
          </Link>
        </td>
        <td className={style.text}>
          <Link 
          className={style.sumitButton + ` nav-link `} 
          to={"/history"}
          >
            Add History
          </Link>
        </td>
      </tr>
    </>
  );
}
