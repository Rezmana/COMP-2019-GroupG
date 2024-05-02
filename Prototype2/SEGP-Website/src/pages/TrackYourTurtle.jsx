import React from 'react'
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, Polyline } from "react-leaflet"
import { Icon, map, marker } from 'leaflet';
import { Map } from '../components/Map';
import Footer from "../components/Footer"

export const TrackYourTurtle = () => {
    // This is a page that allows the user to track the turtles that have been tagged

    return(
        <div>
            
            <Map></Map>
        </div>
    )
}
