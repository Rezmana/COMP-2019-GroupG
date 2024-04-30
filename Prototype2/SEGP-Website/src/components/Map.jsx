import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, Polyline } from 'react-leaflet';
import { Icon } from 'leaflet';
import axios from 'axios';
import './Map.css';
// import 'leaflet/dist/leaflet.css';

export const Map = () => {
  const [data, setData] = useState([]);
  const [TurtleData, setTurtleData] = useState({ TurtleID: '' });
  const [polylinePositions, setPolylinePositions] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

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
    setButtonClicked(false); // Set buttonClicked to false when component mounts (initial render
    getAllCoordinates();
  }, []);

  const displayTurtle = async (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8000/api/getCoordinates/${TurtleData.TurtleID}`)
      .then((result) => {
        console.log('Turtle Received', result.data);
        setData(result.data);
        setButtonClicked(true); // Set buttonClicked to true after receiving data
        handleSearch(); // Call handleSearch to update polylinePositions
      })
      .catch((error) => {
        console.error('Error getting turtleID user:', error.response.data);
      });
  };



  const renderMarkers = () => { 
    return data.map((item, index) => (
      <Marker key={index} icon={customIcon} position={[parseFloat(item.Longitude), parseFloat(item.Latitude)]}>
        <Tooltip>{`Turtle ID: ${item.TurtleID}, Longitude: ${item.Longitude}, Latitude: ${item.Latitude}, Time:${item.Time}`}</Tooltip>
      </Marker>
    ));
  };

  const renderPolyline = () => {
    console.log('Rendering Polyline...');
    console.log('Button Clicked:', buttonClicked);
    console.log('Polyline Positions:', polylinePositions);
    
    if (buttonClicked && polylinePositions.length > 0) {
      const polylinePositions = data.map(item => [parseFloat(item.Longitude), parseFloat(item.Latitude)]);
      return <Polyline positions={polylinePositions} color="green" />;
    }
    return null;
  };

  const customIcon = new Icon({
    iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
  });

  const handleSearch = () => {
    // Calculate polylinePositions based on search criteria, for example, TurtleID
    if (TurtleData.TurtleID.trim() === '') {
      // getAllCoordinates(); // Call getAllCoordinates if the search bar is empty
      setPolylinePositions([]); // Reset polyline positions
      setButtonClicked(false); // Reset button clicked state
    } else {
    const filteredData = data.map(item => item.TurtleID === TurtleData.TurtleID);
    const newPolylinePositions = filteredData.map(item => [parseFloat(item.Longitude), parseFloat(item.Latitude)]);
    setPolylinePositions(newPolylinePositions);
    console.log('Polyline Positions Updated:', newPolylinePositions);
    setButtonClicked(true);
    }
  };

  return (
    <div>
      <div className="formdiv">
        <div className='cent'>
          <h1>Turtle Map</h1>
          <p>Enter the turtleID and Hover on the markers to view the details of the turtles</p>
          <form className="form fr" onSubmit={displayTurtle}>
            <input id='SearchBar' placeholder="Enter turtle ID " type='text' value={TurtleData.TurtleID} onChange={(e) => setTurtleData({ ...TurtleData, TurtleID: e.target.value })}></input>
            <br/>
            <button type='submit'>Search</button>
          </form>
        </div>
      </div>
      <br/>
      <div id='MapSpace'>
      <MapContainer center={[2.8823, 101.22]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderMarkers()}
        {renderPolyline()}
      </MapContainer>
      </div>
    </div>
  );
};
