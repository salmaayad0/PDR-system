import React from 'react';
import style from "./Profile.module.css";
import { useSelector } from 'react-redux';

export default function HistoryView() {
    const { error, loading, history } = useSelector(
        (state) => state.historySlice
      );
    
      const {
       Diabetes,
    Allergies,
    Heart_Disease,
    High_Blood_Pressure,
    High_Cholesterol,
    BoneDenisty
      } = history;

  return (
    <> 
     {error && !loading && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

{loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (

    <div>
    <p className={style.text}>{Diabetes && <span>Diabetes</span>}</p>
    <p className={style.text}>{Allergies && <span>Allergies</span>}</p>
    <p className={style.text}>
      {Heart_Disease && <span>Heart Disease</span>}
    </p>
    <p className={style.text}>
      {High_Blood_Pressure && <span>High Blood Pressure</span>}
    </p>
    <p className={style.text}>
      {High_Cholesterol && <span>High Cholesterol</span>}
    </p>
    <p className={style.text}>
      {BoneDenisty && <span> Bone Denisty</span>}
    </p>
    
  </div>
    )}
  </>
  )
}
