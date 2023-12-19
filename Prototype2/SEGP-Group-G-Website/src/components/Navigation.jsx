import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
        <nav>
            <div className="Navigation">
                <ul id="navbar">
                <li><a id="active">Home</a></li>
                    <li><a href="Gr.html">Graphs</a></li>
                    <li><a>Track your Turtle</a></li>
                    <li><a>Adopt or Donate</a></li>
                    <li><a>Contact Us</a></li>
                    {/* <li><a className="active" href="NewHome.html">Home</a></li>
                    <li><a href="Graphs.html">Graphs</a></li>
                    <li><a href="TrackYourTurtle.html">Track your Turtle</a></li>
                    <li><a href="AdoptorDonate.html">Adopt or Donate</a></li>
                    <li><a href="ContactUs.html">Contact Us</a></li> */}
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar