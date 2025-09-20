import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home";
import About from "./Component/About/About";
import Skills from "./Component/Skills/Skills";
import Project from "./Component/Project/Project";
import Contact from "./Component/Contact/Contact";
import MotionForAll from "./Component/MotionForAll";

function App() {
  return (
    <>
      <Navbar />

     <MotionForAll>
      <div id="home">
        <Home />
      </div>
     </MotionForAll>

      <MotionForAll >
      <div id="about">
        <About />
      </div>
     </MotionForAll>


      <div id="skill">
        {" "}
        <Skills />
      </div>
      


<MotionForAll >

      <div id="project">
        <Project />
      </div>
</MotionForAll>

     <MotionForAll >
      <div id="contact">
        <Contact />
      </div>
      </MotionForAll>
    </>
  );
}

export default App;
