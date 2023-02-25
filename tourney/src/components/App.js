import React from "react";
import Navbar from "./Navbar";
import Events from "./Events";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom"
import './css/App.css';


function App(){
  //html render
    return (
      <>
        <Navbar />
        <div id="main-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </>
    )
};


export default App;
