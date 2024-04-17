import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import "./HomeArticles.css";

export default function HomeArticles() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllArticles = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/article');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
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
    <div className="container text-center">
    <div className="row">
    {data.map((item, index) => (
        <div key={index} className="col">
          <h3>{item.Title}</h3>
          <p>{item.Description}</p>
          <p>{item.URL}</p>
        </div>
      ))
    } 
    </div>
    </div>
  )
}
