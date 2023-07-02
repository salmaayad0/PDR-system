import React, { useEffect } from 'react'
import SideBar from '../components/Profile/SideBar';
import AllSessions from '../components/Profile/AllSessions';
import style from '../components/Profile/Profile.module.css'
import { useDispatch } from 'react-redux';
import { patientSessions } from '../redux/slices/session';
import { patientHistory } from '../redux/slices/history';
import { Link } from 'react-router-dom';

export default function Profile(props) {
    const patient  = props.patient;
    const patientId  = props.patientId

    const dispatchSession = useDispatch();
    useEffect(()=>{
      dispatchSession(patientSessions(patientId))
    },[]);
    
    const dispatchHistory = useDispatch();
    useEffect(() => {
    dispatchHistory(patientHistory(patientId));
  }, []);

  return (
    <>
    <div className="row">
          <div className="col col-lg-2 bg-light">
            <SideBar patient={patient} />
          </div>
          <div className="col col-lg-10 ">
            <h2 className={style.title}>Patient Sessions</h2>
            <div>
            <Link 
          className={style.sumitButton + ` nav-link `} 
          to={`/session/${patientId}`}
          >
            Add Session
          </Link>

          <Link 
          className={style.sumitButton + ` nav-link `} 
          to={`/history/${patientId}`}
          >
            Update History
          </Link>

          </div>
           <AllSessions 
          //  patientId={id} 
           />
          </div>
        </div>
    </>
  )
}
