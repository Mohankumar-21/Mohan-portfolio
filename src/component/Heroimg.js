import '../styles/Heroimg.css';
import Introimg from "../assets/intro-bg.jpg";
import Resume  from "../assets/MohanKumar-Cv.pdf";
import React from 'react';
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className='into-img' src={Introimg} alt=""/>
        </div>
        <div className='content'>
          <p>HI, I'M MOHANKUMAR</p>
          <h1>Full Stack Developer.</h1>
          <p className='name'>I am a passionate software developer with expertise in creating dynamic websites, optimizing databases, and crafting innovative solutions for a wide range of applications.</p>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <a className="btn btn-light" href={Resume}>Resume</a>
          </div>
        </div>
      
    </div>
  )
}

export default Heroimg
