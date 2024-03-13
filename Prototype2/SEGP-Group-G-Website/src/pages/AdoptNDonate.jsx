import React from 'react'
import "./AdoptNDonate.css"
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from 'leaflet';


export const AdoptNDonate = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/getCoordinates');
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

    fetchData();
  }
  , []);
  

  // const mappedData = data.map(item => ({
  //   GeolocationCoordinates: [item.Latitude, item.Longitude],
  //   Popup: `Turtle ID: ${item.TurtleID}, Longitude: ${item.Longitude}, Latitude: ${item.Latitude}`
  // }));

  const geolocationCoordinates = data.map(item => [item.Latitude, item.Longitude]);
  

  const markers = [
    // {
    //   GeolocationCoordinates: [2.8823,101.22],
    //   Popup: "This is a test",
    // },
    // {
    //   GeolocationCoordinates: [2.8823,101.22],
    // }

    
    //   data.map((item) => {
    //     GeolocationCoordinates: [item.Latitude, item.Longitude],
    //     Popup: `Turtle ID: ${item.TurtleID}, Longitude: ${item.Longitude}, Latitude: ${item.Latitude}`
    //   }
  ]

  const customIcon = new Icon({
    iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
  })
  
  return (

  <MapContainer center={[2.8823,101.22]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {/* {data.map((marker, index) => (
    <Marker key={index} icon={customIcon} position={[marker.Latitude, marker.Longitude]}>
    <Popup>{`Latitude: ${marker.Latitude}, Longitude: ${marker.Longitude}`}</Popup>
  </Marker>
    
  ))}*/}

    {/* <Marker position={markers.GeolocationCoordinates} icon={customIcon} key={index}>
      <Popup>{markers.Popup}</Popup>
    </Marker> */}

    {/* {data.map((coordinates, index) => (
        <Marker key={index} icon={customIcon} position={parseFloat(coordinates.Latitude, coordinates.Longitude)}>
          <Popup>{`Latitude: ${coordinates[0]}, Longitude: ${coordinates[1]}`}</Popup>
        </Marker>
      ))} */}

    

    {data.map((item, index) => (
      <Marker key={index} icon={customIcon} position={[parseFloat(item.Longitude),parseFloat(item.Latitude)]}>
        <Popup>{`Turtle ID: ${item.TurtleID}, Longitude: ${item.Longitude}, Latitude: ${item.Latitude}`}</Popup>
      </Marker>
    ))}
  </MapContainer>
  )
}
