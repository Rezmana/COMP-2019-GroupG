import React from 'react'
import "./Graphs.css";
import Graph from "../components/Graph"

export const Graphs = () => {
  return (
    <div className='Content'>
      <h1>Temperature Humidity Graph of Turtle Eggs</h1>
        <div className='graph'>

          <Graph />
        </div>
    </div>
  )
}
