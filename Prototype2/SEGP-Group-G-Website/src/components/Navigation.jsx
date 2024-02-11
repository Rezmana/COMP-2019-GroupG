import React from "react"
import "./Navbar.css";
import {Link, NavLink} from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <div className="Navigation">
                <ul id="navbar">
                    <li>
                        <NavLink to ="/Login">Login/Signup</NavLink>
                    </li>
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
    )
}
