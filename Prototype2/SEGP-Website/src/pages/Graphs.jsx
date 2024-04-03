import React from 'react'
import "./Graphs.css";
import Graph from "../components/Graph"

export const Graphs = () => {
  return (
    <div>
      <div className='Content'>
          <div className='graph'>
            <Graph />
          </div>
      </div>
    </div>
  )
}
