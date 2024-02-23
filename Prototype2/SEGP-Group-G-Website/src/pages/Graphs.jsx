import React from 'react'
import "./Graphs.css";
import Graph from "../components/Graph"
import { useState, useEffect } from 'react';
import useFetch from "react-fetch-hook";
import axios from "axios";

export const Graphs = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      axios.get('http://localhost:8000/api/getGraphData')
          .then(response => {
              setData(response.data);
              console.log(response.data); // Process the data received from the API
          })
          .catch(error => {
              console.error('Error fetching data:', error.response.data);
          });
  }, []);


  return (
    <div>
      <div>
        <h1>API Data</h1>
        <ul>
          {data.map(item => (
            <li>
              <p>temp: {item.Temperature}</p>
              <p>humidity: {item.Humidity}</p>
              <p>time: {item.Time}</p>
              {/* Render more fields as needed */}
            </li>
          ))}
        </ul>
      </div>
      <div className='Content'>
          <div className='graph'>
            <Graph />
          </div>
      </div>
    </div>
  )
}
