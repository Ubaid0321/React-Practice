import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Git-Hub/Github.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/'element={<Layout/>}>
<Route path=''element={<Home/>}/>
<Route path='about'element={<About/>}/>
<Route path='Contact'element={<Contact/>}/>
<Route path='User/:Userid'element={<User/>}/>
<Route path='github'element={<Github/>}/>
</Route>))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
