import React from 'react'
import TradingViewChart from '../tradingViewChart/TradingViewChart';
import { BsCurrencyDollar } from "react-icons/bs";
import btcLogo from './../../assets/btc-logo.png';
import { BiSolidUpArrow } from "react-icons/bi";
import { PiCurrencyInrBold } from "react-icons/pi";
import { BiSolidDownArrow } from "react-icons/bi";
import './btcCard.css';
function BtcCard({ usdValue, inrValue, usd24hrChange}) {
  return (
    <>
      <div className="BTC-card-top">
        <div className="BTC-header">
        <img src={btcLogo}/>
        <h1>Bitcoin</h1>
        <span>BTC</span>
        <div className="rankdiv">Rank #1</div>
        </div>
        <div className="BTC-values">
            <div className="usd">
                <h1><BsCurrencyDollar/> {usdValue}.00</h1>
                <div className={`priceChange-indicator ${usd24hrChange > 0 ? "positive-priceChange": "negative-priceChange" } `}>{usd24hrChange > 0 ? <BiSolidUpArrow /> : <BiSolidDownArrow/>}{usd24hrChange}%</div>
                <p style={{color:"#768396"}}>(24H)</p>
            </div>
            <div className="inr">
                <p><PiCurrencyInrBold/>{inrValue}</p>
            </div>
        </div>
      </div>
      <div className="BTC-card-middle">
        <TradingViewChart/>
      </div>
      <div className="BTC-card-bottom"></div>
    </>
  )
}

export default BtcCard
