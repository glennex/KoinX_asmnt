import React from 'react'
import "./content.css";

function Content() {
  return (
    <div className='content-container'>
         <p><span className='content-descript'>Cryptocurrencies  >></span> Bitcoin</p>
         <div className="left-right-wrapper">
         <div className="left-container">
       <div className="BTC-card"></div>
       </div>
       <div className="right-container">
        <div className="getStarted-card">
            <h3>Get Started with KoinX for FREE</h3>
            <p>With our range of features that ypu can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
        </div>
       </div>
         </div>
       
    </div>
  )
}

export default Content
