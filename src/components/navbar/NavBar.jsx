import React from 'react'

/* for mobile nav bar */
import { useState } from 'react';

/* import icons */
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
// import logo from '../../assets/logo.svg'
// BEM -> block element modifier naming convention

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#projects'>Projects</a></p>
    <p><a href='#resume'>Resume</a></p>
    <p><a href='#featured'>Featured</a></p>
  </>
)

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          {/* <img src={logo} alt="logo" /> */}
        </div>
        <div className="navbar-links_container">
          <Menu />

        </div>
      </div>
      <div className="navbar-sign" >
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />

        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu />
              <div className='navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )

        }
      </div>
    </div>
  )
}

export default NavBar