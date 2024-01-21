import React from "react";
 import '../styles/Skills.css';

 function Skills () {
    return (
        <div className="container" style={{ minHeight: "300px" }}>
            <h1 className="title-text" style={{color:"white"}}>SKILLS</h1>

            <h2 className="title-text">Programming Languages</h2>
            <div className="skill-box">
                <span className="title">C</span>
                <div className="skill-bar">
                    <span className="skill-per html" style={{width:"88%"}}>
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">C++</span>
                <div className="skill-bar">
                    <span className="skill-per html" style={{width:"85%"}}>
                        <span className="tooltip">85%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JAVA</span>
                <div className="skill-bar">
                    <span className="skill-per html" style={{width:"70%"}}>
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <h2 className="title-text">Technical Skills</h2>
            <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html" style={{width:"90%"}}>
                        <span className="tooltip" >90%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css" style={{width:"88%"}}>
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript" style={{width:"73%"}}>
                        <span className="tooltip">65%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs" style={{width:"80%"}}>
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Node JS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs" style={{width:"70%"}}>
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <h2 className="title-text">Data Bases</h2>
            <div className="skill-box">
                <span className="title">MySql</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs" style={{width:"88%"}}>
                        <span className="tooltip">65%</span>
                    </span>
                </div>
                
            </div>
            <div className="skill-box">
                <span className="title">MongoDB</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs" style={{width:"70%"}}>
                        <span className="tooltip">65%</span>
                    </span>
                </div>
                
            </div>
        </div>
    )
 }

 export default Skills;