import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';



function App() {

  useEffect(() => {
  AOS.init();
}, [])

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} />
    </Routes>
  
    </>
  );
}

export default App;
