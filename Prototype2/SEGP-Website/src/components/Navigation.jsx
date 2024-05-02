import React from "react"
import "./Navbar.css";
import {Link, NavLink} from "react-router-dom"
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { FaUserAlt } from "react-icons/fa";

export const Navbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navLogin = () => {
        // Navigate to the login page when the login button is clicked 
        navigate('/Login');
    }

    const navSignup = () => {
        // Navigate to the signup page when the signup button is clicked
        navigate('/Signup');
    }

    const navLogout = () => {
        // Remove the username from sessionStorage and navigate to the login page
        sessionStorage.removeItem('username');
        navigate('/Login');
    }

    const getButtons = () => {
        if (sessionStorage.getItem('username')) {
            return (
                <div className="button-container">
                    <div className="col">
                        <FaUserAlt size={30}></FaUserAlt>
                    </div>
                    <div className="col">
                        <div className="row">
                            <button className="navButton" onClick={navLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            // The layout of the login and signup buttons
            return (
                <div className="button-container">
                    <div className="col">
                        <FaUserAlt size={30}></FaUserAlt>
                    </div>
                    <div className="navcol">
                        <div className="navrow">
                            <button className="navButton" onClick={navLogin}>Login</button>
                        </div>
                        <div className="navrow">
                            <button className="navButton" onClick={navSignup}>Signup</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        // The layout of the navigation bar
        <div className='Container'>
        <nav>
            <div className="Navigation">
                <ul id="navbar">
                    <li>
                        <NavLink to ="/HomePage">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/Graphs">Graphs</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/TrackTurtles">TrackTurtles</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/Donate">AdoptNDonate</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        {getButtons()}
        </div>
    )
}
