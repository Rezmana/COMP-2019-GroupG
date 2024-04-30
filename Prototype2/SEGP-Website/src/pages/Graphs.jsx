import React from 'react'
import SeaTurtleImage from "../assets/images/Turtle_Nest.jpg";
import Graph from "../components/Graph"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Graphs.css";
import Footer from "../components/Footer"

export const Graphs = () => {
  return (
    <div className='Content'>
      <h3>Temperature and Humidity Graph of the Turtle's egg nest</h3>
      <div className='graph'>
        <Graph />
      </div>
      <h1>Here's A Fun Fact</h1>
      <div className="TurtleFacts">
        <img src={SeaTurtleImage} className="turtle" alt="Sea Turtle" width={400} height={400} />
        <p id="TempFact">
          The temperature of turtle eggs during incubation is pivotal for the development, sex determination, 
          and overall fitness of hatchlings. Incubation temperature influences sex ratios through temperature-dependent sex determination, 
          affecting population dynamics and conservation strategies. Optimal temperatures promote normal development and hatchling quality, 
          while extremes or fluctuations can lead to abnormalities or mortality. 
          Behavioral traits and responses to climate change are also impacted by incubation temperature, highlighting the importance of understanding thermal ecology for conservation and management efforts.
        </p>
      </div>
      <Footer />
    </div>
  )
}
