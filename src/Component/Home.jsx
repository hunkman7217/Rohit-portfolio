import React from "react";
import { assets } from "../assets/assets";
import "./Home.css";

function Home() {
  return (
    <div className="Hero">
      <img src={assets.profile13} alt="" />
      <div className="intro">
        <h1>“Hello, I'm <span id="Rohit">Rohit...</span></h1>
        <h3>-<span id="Jobpro"> A MERN Stack Developer Passionate About Code and Creativity” </span></h3>
        <p>
          Enthusiastic and eager MERN Stack Developer with a strong foundation
          in MongoDB, Express.js, React.js, and Node.js. Familiar with building
          responsive web applications, creating RESTful APIs, and solving coding
          challenges. Quick learner with good problem-solving skills and a
          passion for developing efficient and user friendly solutions. Ready to
          contribute to team projects and grow in a fast-paced environment
        </p>
      </div>
    </div>
  );
}

export default Home;
