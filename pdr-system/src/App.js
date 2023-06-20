import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import Patient from './pages/Patient';


function App() {

  useEffect(() => {
  AOS.init(20000);
}, [])

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />} >
      <Route path='/' element={<Home />} />
      <Route path='/doctor' element={<Doctor />}/>
      <Route path='/patient' element={<Patient />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
