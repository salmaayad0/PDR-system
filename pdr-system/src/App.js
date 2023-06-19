import React from 'react';
import './App.css';
import style from "styled-components"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';



// const styledCom = style.button`
// font-family: var(--font-three);
// color: var(--purple);
// `

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
