import React from 'react'
import "./Contact.css"
import {assets} from '../../assets/assets.js'

  function Contact() {
 return(
  <>
    
    <h1 style={{textAlign:"center", marginTop:"100px", marginBottom:"40px"}}>Have an <span id="con"> Idea?</span> <span id="end">
    Let's Talk </span></h1>

    <div className="contact">
<hr />
<div className="btn1">
   <a className='link' href="https://www.linkedin.com/in/rohit-kumar-897614241">  <button className='btn btn-outline-primary'><img src={assets.linkedin} alt="" />Linkdin</button></a>

</div>
<div className="btn1">
 <a className='link' href="https://mail.google.com/mail/?view=cm&fs=1&to=rohitghansela73@gmail.com" 
 target='_blank'
 
 
 >
<button className='btn btn-outline-danger'>
    <img src={assets.gmail} alt="" />Email 
  </button> </a>
</div>

<div className="btn1">
  <a className='link' href="https://github.com/hunkman7217"> 
<button className='btn btn-outline-dark'><img src={assets.github} alt="" />Github</button></a>
</div>
   <hr />

    </div>
<br />
<br />

  
  </>
  )
}

export default Contact
