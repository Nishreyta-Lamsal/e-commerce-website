import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import logo from './assets/logo.png';

function NavBar(){
    return(
        <>
        <div>
        <nav>
            <div className="logo">
                 <img src={logo} alt="DartonFits Logo" className='logo-image' />
            </div>
            <NavLink className={(element) => {return element.isActive ? "pink": ""}}to ="/home"> <li>Home</li> </NavLink>
            <NavLink className={(element) => {return element.isActive ? "pink" : ""}}to="/aboutus"> <li>About us</li> </NavLink>
            <NavLink className={(element) => {return element.isActive ? "pink" : ""}}to="/contactus"> <li>Contact us</li> </NavLink>
            <NavLink className={(element) => {return element.isActive ? "pink" : ""}}to="/login"> <li>Login </li> </NavLink>

            <div className="search-bar">
            <input type="text" placeholder="Search..."/>
            <button type="submit">Search</button>
            </div>
        </nav>
        </div>
        </>
    )
}

export default NavBar