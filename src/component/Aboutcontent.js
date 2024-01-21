import "../styles/Aboutcontent.css";
import { Link } from "react-router-dom";

import React from 'react'

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
         <h1>Who Am I?</h1>
         <p>Hello! I'm a versatile developer who is passionate about both software development and Full Stack web development. With a deep love for coding, I possess a diverse skill set that allows me to create efficient, user-friendly software systems and captivating web experiences.<br></br>
         <ul>
         <li>In my <span>software development role</span>, I draw upon my knowledge of various programming languages and data structures to write clean and efficient code.</li> 
         <li>As a <span>front-end developer</span>, I find joy in bringing designs to life through code. I have a strong grasp of HTML, CSS, and JavaScript, which enables me to craft visually appealing and responsive user interfaces.</li>
         <li>As a <span>Full Stack developer</span>, I specialize in transforming design concepts into fully functional web applications. Proficient in HTML, CSS, and JavaScript, I create engaging user interfaces. On the server side, I leverage languages like Node.js and databases such as MySQL. Git is my go-to for version control, and I'm experienced in deploying on cloud platforms like Netlify and Render. With a strong problem-solving ability and effective communication skills, I'm dedicated to delivering robust solutions for every development project.</li>
         </ul></p>
         <Link to="/contact">
            <button className="btn">Contact</button>
         </Link>
        </div>
        <div className="right">
             
        </div>
      
    </div>
  )
}

export default Aboutcontent
