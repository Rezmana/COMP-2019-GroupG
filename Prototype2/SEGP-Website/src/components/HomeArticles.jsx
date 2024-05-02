import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import "./HomeArticles.css";

export default function HomeArticles() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllArticles = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('http://localhost:8000/api/article');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        // Convert the response to JSON and set the data state
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    getAllArticles();
  }, []);


  return (
    //  Display the articles on the home page in a grid format
    <div className="text-center">
    <div className="row">
    {data.map((item, index) => (
        <div key={index} className="col">
          <h2>{item.Title}</h2>
          <p>{item.Description}</p>
          <a href={item.URL}>{item.URL}</a>
        </div>
      ))
    } 
    </div>
    </div>
  )
}
