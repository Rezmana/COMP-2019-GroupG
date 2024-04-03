import React from 'react'
import "./AdoptNDonate.css"
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, Polyline } from "react-leaflet"
import { Icon, map, marker } from 'leaflet';
import { Map } from '../components/Map';


export const AdoptNDonate = () => {
  return(
    <Map></Map>
  )
}
