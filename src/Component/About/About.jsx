import React from 'react'
import "./About.css"
import {assets} from "../../assets/assets.js"


function About() {
  return (
    <>
   
    <br />
   
    <h1 className='Abt'>About</h1>
  

    <div className='main'>

      <hr />
      
<p className='about-para'>
I am a fresher with a strong interest in web development and a good understanding of MongoDB, Express.js, React.js, and Node.js. I have been learning and building small projects to improve my skills and gain hands-on experience. I am familiar with creating responsive web applications, developing RESTful APIs, and solving coding challenges through practice.

Though I am at the beginning of my career, I am a quick learner and always ready to take on new tasks with enthusiasm. I enjoy working on projects that help me apply what I've learned and improve my problem-solving abilities. I believe that with the right guidance and teamwork, I can contribute effectively and grow as a developer.

I am passionate about creating user-friendly and efficient solutions and am excited to be part of projects where I can learn, collaborate, and develop my skills further in a fast-paced environment.

</p>
<div className="abt-img">
  <img src={assets.RealAboutme} alt="" />
</div>
</div>
<br/>
<br/>

    
 <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" >
  <h1>Thoughts...</h1>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={assets.about3} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={assets.about1gray} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={assets.about2} className="d-block w-100 " alt="..."/>
    </div>
    
  </div>
  
</div>

  </>
  )

}

export default About;
