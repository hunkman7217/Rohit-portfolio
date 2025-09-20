import React from "react";
import "./Skills.css";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

function Skills() {
// Motion object where we have three types of motion effect to use on out elements

 
 const leftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.5+ i * 0.3 , duration: 0.8,ease:"easeOut", type: "spring" },
  }),
}


  return (
    <>
      <div className="container">
        <h1>Tech Skills</h1>
        <br />
        <div className="row">
          <motion.div className="col"
          
          variants={leftToRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
          >
            <h5>Database</h5>
            <div className="list">
              <a href="https://www.geeksforgeeks.org/mongodb/mongodb-an-introduction/"><img src={assets.mongodb} alt="" />
              <p>MongoDB</p>
              </a>
            </div>
            <div className="list">
             <a href="https://mariadb.com/get-started-with-mariadb/"> <img src={assets.Maria} alt="" />
              <p>MariaDB</p>
              </a>
            </div>
          </motion.div>

          <motion.div className="col"
          
             variants={leftToRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
          
          
          >
            <h5>Script Languages</h5>

            <div className="list">
            <a href="https://www.geeksforgeeks.org/html/html-course-structure-of-an-html-document/">  <img src={assets.html} alt="" />
              <p style={{marginTop:"20px"}}>HTML</p>
              </a>
            </div>
            <div className="list">
            <a  href="https://www.geeksforgeeks.org/css/css-tutorial/">  <img
                src={assets.css}
                style={{ width: "66px", marginLeft: "-10px" }}
                alt=""
              />
              <p  style={{marginTop:"20px"}}>CSS</p>
              </a>
            </div>

            <div className="list">
            <a href="https://en.wikipedia.org/wiki/JavaScript"><img src={assets.JAVASCRIPT} style={{marginLeft:"50px"}}alt="" />
              <p>JAVASCRIPT</p>
              </a>
            </div>

            <div className="list">
            <a href="https://react.dev/blog">  <img src={assets.react} alt=""  style={{marginLeft:"25px"}}/>
              <p>REACTJS</p>
              </a>
            </div>
          </motion.div>

          <motion.div className="col"
          
            variants={leftToRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}

          >
            <h5> Hosting Platform</h5>
            <div className="list">
      <a href="https://docs.github.com/en/get-started"><img src={assets.gitpage} alt=""  style={{marginLeft:"45px"}} />
      <p>Github pages </p>
      </a>
    </div>
      <div className="list">
     <a href="https://vercel.com/docs"> <img src={assets.Vercel} alt="" />
      <p>Vercel </p>
      </a>
    </div>
          </motion.div>

          <motion.div className="col"
          
          variants={leftToRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
          >
            <h5> Frameworks </h5>
           
            <div className="list">
              <a href="https://www.geeksforgeeks.org/reactjs/react-bootstrap-introduction/">
              <img src={assets.reactboot} alt="" style={{marginLeft:"25px"}} />
              <p>ReactBootstrap </p>
              </a>
            </div>

            <div className="list">
            <a href="https://tailwindcss.com/docs/installation/using-vite"> 
            <img src={assets.tailwind} alt="" />
              <p>Tailwind CSS </p> </a> 
            </div>

            
            <div className="list">
         <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"> <img src={assets.Bootstrap} alt="" />
              <p>Bootstrap</p>
                  </a> 
            </div>
          </motion.div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Skills;
