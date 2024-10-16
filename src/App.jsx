import React from "react";
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import "./App.css";

const App=()=>{
  return(
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/project" element={<Projects/>}/>
      <Route path="/resume" element={<Resume/>}/>
    </Routes>
  </Router>
  )
}
export default App;
