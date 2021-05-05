import React from "react";
import avi from './img/avi.jpg'

const About = () => {
    return (
        <div className="about m-3 row">
           

            <div className="col col-md-9">
            <main>
            <h1>
             Valentine Eze<span className="full-stop"></span>
            </h1>
                <hr className="gold-hr" />
                <p className='text-justify'>
                    I am a MERN Fullstack developer, and i highly welcome you to my blog! You are highly  appreciated
                </p>
                <p className='text-justify'>
                    I hold a BA in philosophy, were i majored in philosophy of ethics and new age technology. I am a Artificial Intelligence enthusiast, programmer and i write my experiences about them.
                </p>
                <p className='text-justify'>
                   I hope you have a great time here!
                </p>
                <hr className="gold-hr" />
                
                <p className='text-justify'>
                  My stacks includes Javascript, React, Database, MongoDB and mongoose, Form Testing, Node.js, Git, Github, Deployment, Express.js, Shell Scripting, Html/Css, NPM, Bootstrap, Tailwind CSS, Figma. 
                  
                </p>
            </main>
            </div>

            <div className="col col-md-3">
                <img className='rounded ' style={{width: 150, height:'auto'}} src={avi} alt="myimage"/>
            </div>
            
          
        </div>
    );
};

export default About;
