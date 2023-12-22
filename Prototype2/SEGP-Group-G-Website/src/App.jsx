import {HomePage} from "./pages/HomePage.jsx";
import { Graphs } from "./pages/Graphs.jsx";
import { Route, Routes } from "react-router-dom";
import {TrackYourTurtle} from "./pages/TrackYourTurtle.jsx";
import { Navbar } from "./components/Navigation.jsx";
import { AdoptNDonate } from "./pages/AdoptNDonate.jsx";
import { Contact } from "./pages/Contact.jsx";

function App() {
  return(
    <div>
      <img src="src\assets\images\SeatruHeader.png" className="imghead" />
      <Navbar />
      <Routes>
        <Route>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/TurtleGraphs" element={<Graphs />} />
          <Route path="/TrackTurtles" element={<TrackYourTurtle />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Donate" element={<AdoptNDonate />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
  //or this <div><Message /></div>  
}

export default App //export so it can be used elsewhere within the app