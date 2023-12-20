import React from "react"
import "./Navbar.css";
import {Link, NavLink} from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <div className="Navigation">
                <Link to ="/HomePage"></Link>
                <ul id="navbar">
                    <li>
                    <NavLink to ="/HomePage">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/TurtleGraphs">Graphs</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/TrackTurtles">TrackTurtles</NavLink>
                    </li>
                    {/* <li><a>Track your Turtle</a></li> */}
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
