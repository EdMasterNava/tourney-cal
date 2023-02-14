import React from "react";
// import {Route, Routes} from "react-router-dom";
import Events from "./Events";
import './App.css';

function App(props){
  //html render
    return (
      <div id="main-container">
        <Events></Events>
        {/* <Routes>
          <Route path="/events" element={<Events/>}></Route>
        </Routes> */}
      </div>
    )
};


export default App;
