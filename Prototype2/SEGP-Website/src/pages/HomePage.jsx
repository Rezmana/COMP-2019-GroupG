import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SeaTurtleImage from "../assets/images/SeaTurtle.jpg";
import TeamPhoto from "../assets/images/TeamPhoto.jpg";
import { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import HomeArticles from "../components/HomeArticles";
import "./HomePage.css";
import Footer from "../components/Footer"


export const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set isVisible to true after a short delay to trigger the fade-in effect
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        // Clear the timeout to prevent memory leaks
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className="Content">
            <Fade>
            <div>
                <h1>Adopt a Turtle</h1>
                <div className="row">
                    <div className="column">
                        <img src={SeaTurtleImage} className="turtle" alt="Sea Turtle" width={500} height={400} />
                    </div>
                    <div className="column">
                        <div className="bord">
                            <h3>Sea Turtles in Malaysia</h3>
                            <p>Malaysia hosts several important species of sea turtles, 
                                including the Green Turtle, Hawksbill Turtle, Leatherback Turtle, 
                                and Olive Ridley Turtle. These species are renowned for their long 
                                migrations between feeding grounds and nesting beaches, often returning 
                                to the exact place of their birth to lay eggs. For instance, Green turtles 
                                frequently nest on the beaches of Sabah, while the critically endangered Hawksbill, 
                                recognizable by its beautifully patterned shell, nests in Terengganu and Sabah.
                                 Leatherback turtles, the largest of all sea turtle species, used to be 
                                 regular visitors to Terengganu for nesting, although their numbers have 
                                 drastically decreased. Conservation efforts are essential to protect these
                                  marine turtles from threats like habitat loss and poaching. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="bord">
                            <h2>How We Track our Sea Turtles</h2>
                            <p>Tracking devices, such as satellite tags, are increasingly used 
                                on sea turtles to monitor their migration routes, feeding grounds, 
                                and nesting sites. These devices are carefully attached to the turtle's 
                                shell and transmit location data to researchers, who can analyze the 
                                paths taken by the turtles over vast oceanic distances. This tracking 
                                is critical for understanding behavioral patterns, habitat usage, and 
                                potential threats encountered by the turtles across different marine 
                                environments. The insights gained from this data are invaluable for 
                                conservation efforts, enabling the creation of more effective marine 
                                protected areas, enhancing nesting beach protections, and informing policies 
                                to mitigate interactions with fisheries. Additionally, tracking helps in 
                                educating the public and stakeholders about the crucial role these 
                                creatures play in marine ecosystems, further supporting global conservation initiatives.</p>
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
                    <div className="col">
                        <h2>95%</h2>
                        <p>of HawksBill Turtle and LeatherBack Turtle are poached each year</p>
                    </div>
                    <div className="col">
                        <h2>61%</h2>
                        <p>are approximately threathened or extinct due to habitat loss or bycatch</p>
                    </div>
                    <hr/>
                </div>
            </div>
            
            <HomeArticles></HomeArticles>
            <Footer></Footer>
            </Fade>
        </div>
    )
}
