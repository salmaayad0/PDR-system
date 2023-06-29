import React from 'react'
import SideBar from '../components/Profile/SideBar';
import AllSessions from '../components/Views/AllSessions';
import { useDispatch } from 'react-redux';
import { patientSessions } from '../redux/slices/patient';

export default function Profile(props) {
    const patient  = props.patient;
    const { id } = patient
    const dispatch = useDispatch();
    dispatch(patientSessions(id));

  return (
    <>
    <div className="row">
          <div className="col-2 sideBar bg-light">
            <SideBar patient={patient} />
          </div>
          <div className="col-10">
           <AllSessions patientId={id} />
          </div>
        </div>
    </>
  )
}
