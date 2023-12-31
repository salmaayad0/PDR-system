import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// Aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Blocks } from 'react-loader-spinner'

// pages
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import Patient from './pages/Patient';
import Admin from './pages/Admin';
import Session from './pages/Session';
import History from './pages/History';
import PatientSearch from './Doctor pages/PatientSearch';
import DocRegister from './pages/DocRegister';
import PatientRegister from './pages/PatientRegister';
import Profile from './pages/Profile';
import ViewPatients from './pages/ViewPatients';
import ViewDoctors from './pages/ViewDoctors';
import NotFound from './pages/NotFound';
import ProfilePatient from './Patient pages/ProfilePatient';
import ProfileForDoc from './Doctor pages/ProfileForDoc';
import PatientRegisterDoc from './Doctor pages/PatientRegisterDoc';

function App() {
  useEffect(() => {
    AOS.init(15000);
  }, [])

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Blocks
          visible={loading}
          height="200"
          width="200"
          ariaLabel="blocks-loading"
          wrapperStyle={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
          }}
          wrapperClass="blocks-wrapper"
        />
      ) : (
        <>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='/doctor' element={<Doctor />} />
            <Route path='/patient' element={<Patient />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/addDoctor' element={<DocRegister />} />
            <Route path='/addPatient' element={<PatientRegister />} />
            <Route path='/profile/:patientId' element={<Profile />} />
            <Route path='/allpatients' element={<ViewPatients />} />
            <Route path='/alldoctors' element={<ViewDoctors />} />
          </Route>
          <Route path='/search' element={<PatientSearch />} />
          <Route path='/Viewprofile/:patientId' element={<ProfileForDoc />} />
          <Route path='/addPatientdoc' element={<PatientRegisterDoc />} />
          <Route path='/session/:patientId' element={<Session />} />
          <Route path='/history/:patientId' element={<History />} />


          <Route path='/report/:patientId' element={<ProfilePatient />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </>
      )}
    </>
  );
}

export default App;
