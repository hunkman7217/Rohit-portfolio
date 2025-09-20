import React from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets';

function Navbar() {
 
  return (
    <>
 
   <div className="display">
    <nav className="bar">    
<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li> <a href="#project">Projects</a></li>
<li><a href="#skill">Skills</a></li>
<li><a href="#contact">Contact</a></li>

    </nav>
</div>


    </>
  )
}

export default Navbar;
