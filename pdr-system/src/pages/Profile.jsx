import React, { useEffect } from 'react'
import SideBar from '../components/Profile/SideBar';
import AllSessions from '../components/Profile/AllSessions';
import style from '../components/Profile/Profile.module.css'
import { useDispatch } from 'react-redux';
import { patientSessions } from '../redux/slices/session';
import { patientHistory } from '../redux/slices/history';

export default function Profile(props) {
    const patient  = props.patient;
    const { id } = patient

    const dispatchSession = useDispatch();
    useEffect(()=>{
      dispatchSession(patientSessions(id))
    },[]);
    
    const dispatchHistory = useDispatch();
    useEffect(() => {
    dispatchHistory(patientHistory(id));
  }, []);

  return (
    <>
    <div className="row">
          <div className="col col-lg-2 bg-light">
            <SideBar patient={patient} />
          </div>
          <div className="col col-lg-10 ">
            <h3 className={style.title}>Patient Sessions</h3>
           <AllSessions patientId={id} />
          </div>
        </div>
    </>
  )
}
