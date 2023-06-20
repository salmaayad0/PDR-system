import React from 'react'
import NavBarC from '../components/NavBar/NavBarC'
import FooterC from '../components/Footer/FooterC'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <NavBarC />
    <Outlet />
    <FooterC />
    </>
  )
}
