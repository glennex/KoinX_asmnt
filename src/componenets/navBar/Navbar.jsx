import React from 'react'
import "./navbar.css";

function Navbar() {
  return (
    <div className='Nav-container'>
      <div className="logo_container"> LOGO </div>
      <div className="navitems">
        <ul className='navItem-list'>
          <li>Crypto Taxes</li>
          <li>Free Tools</li>
          <li>Resource Center</li>
          <li><button>Get Started</button></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
