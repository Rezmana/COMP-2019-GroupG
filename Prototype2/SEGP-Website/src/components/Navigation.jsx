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
        navigate('/Login');
    }

    const navSignup = () => {
        navigate('/Signup');
    }

    const navLogout = () => {
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
            return (
                <div className="button-container">
                    <div className="col">
                        <FaUserAlt size={30}></FaUserAlt>
                    </div>
                    <div className="col">
                        <div className="row">
                            <button className="navButton" onClick={navLogin}>Login</button>
                        </div>
                        <div className="row">
                            <button className="navButton" onClick={navSignup}>Signup</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
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
