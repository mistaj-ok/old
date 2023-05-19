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

  </>
)
const handleClick = () => {
  // Navigate to the specified URL
  window.location.href=('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
};
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
             

                
                <button onClick={handleClick}>dont,click</button>
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