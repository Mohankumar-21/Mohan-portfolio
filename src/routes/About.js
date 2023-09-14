import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Heroimage2 from '../component/Heroimage2';
import Aboutcontent from '../component/Aboutcontent';



const About = () => {
  return (
    <div>
          <Navbar/>
          <Heroimage2  heading="ABOUT" text=" Im a friendly Front-End Developer"/>
          <Aboutcontent/>
          <Footer/>
    </div>
  )
}

export default About
