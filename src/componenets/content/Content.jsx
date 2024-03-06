import React from 'react'
import TrendinCoins from '../trendingCoins/TrendinCoins';
import "./content.css";
import startedImg from '../../assets/temp.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { RxDoubleArrowRight } from "react-icons/rx";
import BtcCard from '../BTC/BtcCard';

function Content(props) {
  return (
    <div className='content-container'>
         <p><span className='content-descript'>Cryptocurrencies  <RxDoubleArrowRight/></span> Bitcoin</p>
         <div className="left-right-wrapper">
         <div className="left-container">
       <div className="BTC-card-container">
          <BtcCard usdValue={props.usdValue} inrValue={props.inrValue} usd24hrChange={props.usd24hrChange}/>
       </div>
       </div>
       <div className="right-container">
        <div className="getStarted-card">
          <div><h2>Get Started with KoinX</h2>
            <h2> for FREE</h2></div>
            <p>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
            <img src={startedImg}/>
            <button> Get Started for FREE <FaArrowRightLong/></button>
        </div>
        <TrendinCoins/>

       </div>
         </div>
       
    </div>
  )
}

export default Content
