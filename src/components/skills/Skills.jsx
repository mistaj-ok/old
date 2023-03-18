import React from 'react'
import './skills.css';
import javaLogo from "../../assets/javaLogo.png";
import cLogo from "../../assets/cLogo.png";
import webDevLogo from "../../assets/webDevLogo.png";
import nodeLogo from "../../assets/nodeLogo.png";

// import feature2 from '../../assets/feature2.jpg';



const Skills = () => {
  return (
    <div className='skills section__padding' id="skills">
      <div className='skills-content'>
        <h1>Skills</h1>

        <div className='skills image-boxes'>
          <div className='img-box small'>
            <img src={javaLogo} alt="java" />
          </div>


          <div className='img-box small'>
            <img src={cLogo} alt="cProgramming" />
          </div>

          <div className='img-box wide'>
            <img className="wide" src={webDevLogo} alt="htmlJsCss" />
          </div>

          <div className='img-box small'>
            <img src={nodeLogo} alt="node" />
          </div>



        </div>
      </div>
    </div>

  )
}

export default Skills