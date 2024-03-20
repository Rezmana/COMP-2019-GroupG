import React from 'react'
import "./AdoptNDonate.css"
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, Polyline } from "react-leaflet"
import { Icon, map, marker } from 'leaflet';


export const AdoptNDonate = () => {

  const [data, setData] = useState([]);
  const [TurtleData, setTurtleData] = useState([
    {
      TurtleID: '',
    }
  ]);

  useEffect(() => {
    const getAllCoordinates = async () => {
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
    getAllCoordinates();
  }, []);

  const displayTurtle = async (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8000/api/getCoordinates/${TurtleData.TurtleID}`)
      .then((result) => {
        console.log('Turtle Recieved', result.data);
        setData(result.data);
      })
      .catch((error) => {
        console.error('Error getting turtleID user:', error.response.data);
      });
  }


  // const mappedData = data.map(item => ({
  //   GeolocationCoordinates: [item.Latitude, item.Longitude],
  //   Popup: `Turtle ID: ${item.TurtleID}, Longitude: ${item.Longitude}, Latitude: ${item.Latitude}`
  // }));

  const renderMarkers = () => {
    const coordinates = data.map((item, index) => (
      <Marker key={index} icon={customIcon} position={[parseFloat(item.Longitude), parseFloat(item.Latitude)]}>
        <Tooltip>{`Turtle ID: ${item.TurtleID}, Longitude: ${item.Longitude}, Latitude: ${item.Latitude}`}</Tooltip>
      </Marker> 
    ));

    const polylinePositions = data.map(item => [parseFloat(item.Longitude), parseFloat(item.Latitude)]);
    const polyline = <Polyline positions={polylinePositions} color="green" />;
    
    return [...coordinates, polyline]; 
    //  return coordinates;
  }
    

  const customIcon = new Icon({
    iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
  })

  return (
    <div>
      <div>
        <form>
          <input id='SearchBar' placeholder="Enter turtle ID " type='text' value={TurtleData.TurtleID} onChange={(e) => setTurtleData({ ...TurtleData, TurtleID: e.target.value })}></input>
          <input type='Submit' onClick={displayTurtle}></input>
        </form>
      </div>
      <MapContainer center={[2.8823, 101.22]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderMarkers()}
      
       {/* {data.map((item, index) => (
      <Marker key={index} icon={customIcon} position={[parseFloat(item.Longitude), parseFloat(item.Latitude)]}>
        <Popup>{`Turtle ID: ${item.TurtleID}, Longitude: ${item.Longitude}, Latitude: ${item.Latitude}`}</Popup>
      </Marker>
       ))} */}
      
      </MapContainer>
    </div>
  )
}
