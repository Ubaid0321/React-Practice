import React from 'react'
import Header from './header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './Home/Home'
function Layout() {
  return (
    <>

<Header/>
<Outlet/>

<Footer/>
    </>
  )
}

export default Layout