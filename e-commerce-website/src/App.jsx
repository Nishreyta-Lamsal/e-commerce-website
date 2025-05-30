import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home.jsx'
import Products from './Products.jsx'
import AboutUs from './AboutUs.jsx'
import ContactUs from './ContactUs.jsx'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'

function App() {

  const router = createBrowserRouter ([
    {
    path: "/",
    element: <>  <NavBar/> <Home/></> //default route for "/"
    },
     {
    path: "/home",
    element: <>  <NavBar/> <Home/></>
    },
    {
      path: "/products",
      element: <>  <NavBar/> <Products/></>
    },
    {
      path: "/aboutus",
      element: <>  <NavBar/> <AboutUs/></>
    },
    {
      path: "/contactus",
      element: <>  <NavBar/> <ContactUs/></>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element:<SignUp /> 
    }

  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
