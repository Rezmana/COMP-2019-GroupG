import React from "react";
import "./HomePage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SeaTurtleImage from "../assets/images/SeaTurtle.jpg";
import TeamPhoto from "../assets/images/TeamPhoto.jpg";
// import TurtleTrackerImage from "./imagesg/TurtleTracker.jfif";

export const HomePage = () => {
    return (
        <div className="Content">
            <div className="bord">
                <h1>Adopt a Turtle</h1>
                <div className="row">
                    <div className="column">
                        <img src={SeaTurtleImage} className="turtle" alt="Sea Turtle" width={500} height={400}/>
                    </div>
                    <div className="column">
                        <div className="bord">
                            <h3>Sea Turtles in Malaysia</h3>
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
                        <img src={TeamPhoto} className="team" alt="Team Photo" width={500} height={400} />
                    </div>

                </div>
            </div>
            <div className="container-sm">
                <div className="row">
                    <div className="col">
                        <h2>1million+</h2>
                        <p>Turtles are poached from 1990 to 2020.</p>
                    </div>
                    {/* <div> HEH EH EH EHE</div> */}
                    <div className="col">
                        <h2>95%</h2>
                        <p>of HawksBill Turtle and LeatherBack Turtle are poached each year</p>
                    </div>
                    <div className="col">
                        <h2>61%</h2>
                        <p>are approximately threathened or extinct due to habitat loss or bycatch</p>
                    </div>
                </div>
            </div>
        </div>
    );
}