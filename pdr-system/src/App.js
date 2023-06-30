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
import PatientSearch from './pages/PatientSearch';
import DocRegister from './pages/DocRegister';
import PatientRegister from './pages/PatientRegister';
import Profile from './pages/Profile';
import ViewPatients from './pages/ViewPatients';
import ViewDoctors from './pages/ViewDoctors';

function App() {
  useEffect(() => {
    AOS.init(20000);
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
            <Route path='/session' element={<Session />} />
            <Route path='/history' element={<History />} />
            <Route path='/search' element={<PatientSearch />} />
            <Route path='/addDoctor' element={<DocRegister />} />
            <Route path='/addPatient' element={<PatientRegister />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/allpatients' element={<ViewPatients />} />
            <Route path='/alldoctors' element={<ViewDoctors />} />
          </Route>
        </Routes>
        </>
      )}
    </>
  );
}

export default App;
