import React from "react";
import "./Navbar.css";
import Home from "../pages/HomePage"
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <nav>
            <div className="Navigation">
                <ul id="navbar">
                    <li>
                    <Link to ="/">Home</Link>
                    </li>
                    {/* <a id="active">Home</a> */}
                    
                    {/* <li><a href="Gr.html">Graphs</a></li> */}
                    <li>
                        <Link to ="/TurtleGraphs">Graphs</Link>
                    </li>
                    <li>
                        <Link to ="/TrackTurtles">TrackTurtles</Link>
                    </li>
                    {/* <li><a>Track your Turtle</a></li> */}
                    <li>
                        <Link to ="/Donate">AdoptNDonate</Link>
                    </li>
                    <li>
                        <Link to ="/Contact">Contact</Link>
                    </li>
                    {/* <li><a>Adopt or Donate</a></li>
                    <li><a>Contact Us</a></li> */}
                    {/* <li><a className="active" href="NewHome.html">Home</a></li>
                    <li><a href="Graphs.html">Graphs</a></li>
                    <li><a href="TrackYourTurtle.html">Track your Turtle</a></li>
                    <li><a href="AdoptorDonate.html">Adopt or Donate</a></li>
                    <li><a href="ContactUs.html">Contact Us</a></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar