import React from "react";
import { useState, useEffect } from "react";
import TrendinCoins from "../trendingCoins/TrendinCoins";
import "./content.css";
import startedImg from "../../assets/temp.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxDoubleArrowRight } from "react-icons/rx";
import BtcCard from "../BTC/BtcCard";
import MoreCoins from "../moreCoins/MoreCoins";

function Content(props) {

  const [trendinCoins, setTrendingCoins]= useState([]);

  useEffect(()=>{
    const fetchTrendingCoins=async ()=>{
      try {
        const response= await fetch("https://api.coingecko.com/api/v3/search/trending");
        const fetchedData= await response.json();
        // console.log(fetchedData.coins.item.data.price_change_percentage_24h.inr);

        const TrendingCoinsList= fetchedData.coins.map(coin=>{
          const priceChangeINR = parseFloat(coin.item.data.price_change_percentage_24h.inr).toFixed(2);
          return {
            name: coin.item.name,
            imageUrl: coin.item.small,
            symbol:coin.item.symbol,
            priceChangeINR: priceChangeINR,
            price: coin.item.data.price,
            graph:coin.item.data.sparkline,
            // price_btc:coin.item.data.price_btc
          };
        });
        setTrendingCoins(TrendingCoinsList);

        // console.log(TrendingCoinsList);
      } catch (error) {
        
      }
    }
    

    fetchTrendingCoins();
  },[]);



  return (
    <div className="content-container">
      <p>
        <span className="content-descript">
          Cryptocurrencies <RxDoubleArrowRight />
        </span>{" "}
        Bitcoin
      </p>
      <div className="left-right-wrapper">
        <div className="left-container">
          <div className="BTC-card-container">
            <BtcCard
              usdValue={props.usdValue}
              inrValue={props.inrValue}
              usd24hrChange={props.usd24hrChange}
            />
          </div>
        </div>
        <div className="right-container">
          <div className="getStarted-card">
            <div>
              <h2>Get Started with KoinX</h2>
              <h2> for FREE</h2>
            </div>
            <p>
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </p>
            <img src={startedImg} />
            <button>
              {" "}
              Get Started for FREE <FaArrowRightLong />
            </button>
          </div>
          <TrendinCoins trendinCoins={trendinCoins}/>
          
        </div>
      </div>
      <MoreCoins trendinCoins={trendinCoins} usdValue={props.usdValue}/>
    </div>
  );
}

export default Content;
