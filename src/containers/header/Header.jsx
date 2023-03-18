import React from 'react'
import './header.css';
import home from "../../assets/home.jpeg"

const Header = () => {
  return (
    <div className='header section__padding' id="home">
      <div className='header-content'>
        <h1 className='gradient__text'>Welcome to my custom website!</h1>
          <p>This page is actually a React-web-application.</p>
      </div>
      <div className='header-image'>
        <img src={home} alt="leaf" />
        </div>
    </div>
  )
}

export default Header