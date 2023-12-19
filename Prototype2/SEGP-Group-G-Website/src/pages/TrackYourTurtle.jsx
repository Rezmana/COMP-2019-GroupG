import React from "react";
import "./HomePage.css";
import Navigation from "../components/Navigation.jsx";
import SeatruHeader from ''
// import images from 'assets/images';
const TrackYourTurtle = () => {
    return(
    <div>
        <link rel="stylesheet" type="text/css" href="HomePage.css" />
        <img src="src\assets\images\SeatruHeader.png" className="imghead" />
        <Navigation></Navigation>
        
    {/* <img src="img/SeatruHeader.png" class="imghead"> */}
    <div class="scroll"> 
        <a href="NewHome.html">Home</a>
        <a href="Graphs.html">Graphs</a>
        <a class="active" href="TrackYourTurtle.html">Track your Turtle</a>
        <a href="AdoptorDonate.html">Adopt or Donate</a>
        <a href="ContactUs.html">Contact Us</a>
    </div>

    <div class="bord">
        <h1>Live Migration Update</h1>
        {/* <img src="img/World map Test.jpg" class="image"> */}
        <p>(This is currently just an image, functionality will come later)</p>
    </div>  

    </div>
    )
}
export default TrackYourTurtle
