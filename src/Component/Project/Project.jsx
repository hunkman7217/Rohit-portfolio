import React from "react";
import "./Project.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

function Project() {
  const [click, getClick] = useState(false);
  const [click1, getClick1] = useState(false);
  const [click2, getClick2] = useState(false);
  const [click3, getClick3] = useState(false);



  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Projects</h1>

      <div className="project">
        <div className="box1">
          <img src={assets.Project1} alt="" />

          <button
            className="btn btn-primary"
            onClick={() => {
              getClick((prev) => !prev);
            }}
          >
            Project Details
          </button>

          <button
            className="btn btn-success"
          ><a href="https://mern-ai-image-generator-hslrtzpqf.vercel.app">
            Live Preview
            </a>
          </button>

          <button
            className="btn btn-info"
            style={{ color: "white" }}
          >
            <a href="https://github.com/hunkman7217/Mern-Ai-Image-Generator">
            Source Code</a>
          </button>

          {click ? (
            <div className="box2">
              <span className="title">Description:</span>{" "}
              <p>
               This is an AI Image Generator web app that allows users to create unique and realistic images from text prompts, offering a creative experience with instant results.
              </p>
              <hr />
              <span className="title">Features:</span>
              <p>
              Generate AI-powered images using text input, download created images, and share them seamlessly. Provides a smooth user experience with fast response and interactive UI.
              </p>
                  <hr />
                  <span className="title">Tech used:</span>
                  <br />
              <p>
                MongoDB, Express, React, Node.js, Tailwind Css , OpenAi API
              </p>

            </div>
          ) : null}
         
        </div>

        {/*2nd project */}
            
          <div className="box1">
          <img src={assets.project2} alt="" />

          <button
            className="btn btn-primary"
            onClick={() => {
              getClick1((prev) => !prev);
            }}
          >
            Project Details
          </button>

          <button
            className="btn btn-success"
           
          ><a href="https://hunkman7217.github.io/youtube-clone/">
            Live Preview
            </a>
          </button>

          <button
            className="btn btn-info"
            style={{ color: "white" }}
          >   <a href="https://github.com/hunkman7217/youtube-clone">
            Source Code</a>
          </button>

          {click1 ? (
            <div className="box2">
              <span className="title">Description:</span>{" "}
              <p>
               This is a web app that mimics the look and basic layout of YouTube, letting users browse videos, navigate via sidebar menu, see profile section, and access typical YouTube sections like Home, Shorts, Subscriptions, and Library for a familiar video browsing experience.
              </p>
              <hr />
              <span className="title">Features:</span>
              <p>
                Sidebar navigation with links to Home, Shorts, Subscriptions, Library etc. Video preview thumbnails and profile menu visible.Responsive layout similar to YouTube.
              </p>
                  <hr />
                  <span className="title">Tech used:</span>
                  <br />
              <p>
               HTML, CSS, JavaScript, GitHub Pages
              </p>

            </div>
          ) : null}
          
        </div>
       
       {/* project 3*/}
         
            
          <div className="box1">
          <img src={assets.project3} alt="" />

          <button
            className="btn btn-primary"
            onClick={() => {
              getClick2((prev) => !prev);
            }}
          >
            Project Details
          </button>

          <button
            className="btn btn-success"
            
          ><a href="https://hunkman7217.github.io/Myntra-clone/">
            Live Preview
            </a>
          </button>

          <button
            className="btn btn-info"
            style={{ color: "white" }}
          ><a href="https://github.com/hunkman7217/Myntra-clone">
            Source Code</a>
           
          </button>

          {click2 ? (
            <div className="box2">
              <span className="title">Description:</span>{" "}
              <p>
                This is a web clone of Myntra's online shopping portal, recreating the look, layout, and navigation of a fashion e-commerce site to simulate browsing categories, products, and user interface for Men, Women, Kids, Beauty, etc.
              </p>
              <hr />
              <span className="title">Features:</span>
              <p>
                The project includes a fully designed navigation bar with sections for Men, Women, Kids, Home, Beauty, and Studio, along with a header showing Profile, Wishlist, and Bag icons. It provides sections for customer policies like FAQs, Terms & Conditions, and Contact information while showcasing promotional banners for offers. The layout is responsive and built to replicate Myntra's shopping experience, giving users a familiar e-commerce fee
              </p>
                  <hr />
                  <span className="title">Tech used:</span>
                  <br />
              <p>
                HTML, CSS, JavaScript, Github
              </p>

            </div>
          ) : null}
         
        </div>

       {/* Project 4  */}
   

            
          <div className="box1">
          <img src={assets.project4} alt="" />

          <button
            className="btn btn-primary"
            onClick={() => {
              getClick3((prev) => !prev);
            }}
          >
            Project Details
          </button>

          <button
            className="btn btn-success"
            
          ><a href="https://gemini-clone-phi-gold.vercel.app/">
            Live Preview
            </a>
            
          </button>

          <button
            className="btn btn-info"
            style={{ color: "white" }}
          
          ><a href="https://github.com/hunkman7217/Gemini-Clone">
            Source Code</a>
            
          </button>

          {click3 ? (
            <div className="box2">
              <span className="title">Description:</span>{" "}
              <p>
                This project is a clone of the Gemini interface, simulating a sleek AI assistant / search tool frontend. It aims to replicate the look and feel of Gemini's UI, allowing users to interact with prompts or queries in a modern, user-friendly layout.
              </p>
              <hr />
              <span className="title">Features:</span>
              <p>
               The application offers an input area for users to type queries or prompts, a clean messaging/chat-style interface for responses, and visually organized output. It includes standard UI components such as a navigation or top header, conversation view, and possible settings or profile section. The design focuses on clarity and ease of use, with smooth transitions and responsive layout so that it works well on both desktop and mobile.
              </p>
                  <hr />
                  <span className="title">Tech used:</span>
                  <br />
              <p>
              React, CSS, JSX, Vercel
              </p>

            </div>
          ) : null}
          
        </div>


      </div>
     
      <hr />
    </>
  );
}

export default Project;


