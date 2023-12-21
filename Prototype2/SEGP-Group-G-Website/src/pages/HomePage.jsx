import React from "react";
import "./HomePage.css";
export const HomePage = () => {
    return(
    <div className="Content">
        <div className="bord">
            <h1>Adopt a Turtle</h1>
            <div className="row">
                <div className="column">
                    <img src="img/SeaTurtle.jpg" className="turtle" />
                </div>
                <div className="column">
                    <div className="bord">
                        <h2>Sea Turtles in Malaysia</h2>
                        <p>Input information about different sea turtles in Malaysia here. </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="bord">
                        <h2>How We Track our Sea Turtles</h2>
                        <p>Input information about the planting of the trackers and how they work. (photo will be changed)</p>
                    </div>
                </div>
                <div className="column">
                    <img src="img/TurtleTracker.jfif" className="turtle" />
                </div>
            </div>
        </div>
    </div>
    )
}