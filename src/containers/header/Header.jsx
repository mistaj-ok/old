import React from 'react'
import './header.css';
import home from "../../assets/home.jpeg"
import logoAp from "../../assets/appleLogo.png"
import gMapsLogo from "../../assets/gMapsLogo.png"


const Header = () => {
  return (
    <div className='header section__padding' id="home">
      <div className='header-content'>
        <h1 className='gradient__text'>You're Invited!</h1>
          
          
          <p> <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MmNndTBwODV2dWpnNnEwOTdqZjhncDNmYmggbmlja2Z1cnkuam9uZXNAbQ&amp;tmsrc=nickfury.jones%40gmail.com"><img border="0" alt="calendar" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" /></a></p>
          <p><span className="attribute">"who":</span> friends, family</p>
          <p><span className="attribute">"what" :</span> Nicks ncc graduation celebration</p>
          <p><span className="attribute">"when" :</span> Wednesday, May 24th <b>9pm-11pm</b></p>
          <p><span className="attribute">"where" :</span> Oceanside, NY <p> </p><a href="https://www.google.com/maps?q=latitude,longitude"> <img className='appleLogo' src={gMapsLogo}></img>Open in Google Maps</a>
          <p> <a href="https://maps.apple.com/?q=latitude,longitude"><img className='appleLogo' src={logoAp}></img>Open in Apple Maps</a>


</p>
</p>
      </div>
      <div className='header-image'>
        <img src={home} alt="leaf" />
        </div>
    </div>
  )
}

export default Header