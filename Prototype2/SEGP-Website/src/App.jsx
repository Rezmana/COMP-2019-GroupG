import {HomePage} from "./pages/HomePage.jsx";
import {Login} from "./pages/Login.jsx";
import {Signup} from "./pages/Signup.jsx";
import { Graphs } from "./pages/Graphs.jsx";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import {TrackYourTurtle} from "./pages/TrackYourTurtle.jsx";
import { Navbar } from "./components/Navigation.jsx";
import { AdoptNDonate } from "./pages/AdoptNDonate.jsx";
import { Contact } from "./pages/Contact.jsx";
import React, { useEffect } from 'react';
import Footer from "./components/Footer.jsx";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the current location is already the homepage
    if (location.pathname == '/') {
      // Redirect to the HomePage when the component mounts
      navigate('/HomePage');
    }
  }, [location.pathname, navigate]);

  return(
    <div>
      <img src="src\assets\images\SeatruHeader.png" className="imghead" />
      <Navbar />
      <Routes>
        <Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Graphs" element={<Graphs />} />
          <Route path="/TrackTurtles" element={<TrackYourTurtle />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Donate" element={<AdoptNDonate />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
  //or this <div><Message /></div>  
}

export default App //export so it can be used elsewhere within the app