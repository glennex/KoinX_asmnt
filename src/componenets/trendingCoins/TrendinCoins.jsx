import React from 'react'
import { useState, useEffect } from 'react';
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import './trendingCoins.css'

function TrendinCoins({trendinCoins}) {
    // const [topCoins, setTopCoins] = useState([]);
    // const [moreCoins, setMoreCoins]= useState([]);

    // useEffect(() => {
    //   const fetchTopCoins = async () => {
    //     try {
    //       const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
    //       const data = await response.json();
    //     // console.log(data.coins.item.data);
    //       const topThreeCoins = data.coins.map(coin => {
    //         // console.log(data.coin.item.data.price);
    //         const priceChangeINR = parseFloat(coin.item.data.price_change_percentage_24h.inr).toFixed(2);
    //         console.log(coin.item.data.price)
    //         return {
    //           name: coin.item.name,
    //           imageUrl: coin.item.small,
    //           symbol:coin.item.symbol,
    //           priceChangeINR: priceChangeINR,
    //           price: coin.item.data.price
    //         };
    //       });
          

    //       setTopCoins(topThreeCoins);
    //     //   console.log(topThreeCoins);
    //     console.log(topCoins);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchTopCoins();
    // }, []);

  return (
    <div>
      <div className="trending-card">
        <h3>Trending Coins (24h)</h3>
        {/* <div className="trending-coins-list"> */}
          
        {trendinCoins.slice(0, 3).map((coin, index) => (
          <div className="trending-coins-list" key={index}>
            <div className="left-grp-trending">
            <img src={coin.imageUrl} alt={coin.name} />
            <p>{coin.name}({coin.symbol})</p>
            </div>
            
            <div className={`priceChange-indicator ${coin.priceChangeINR > 0 ? "positive-priceChange": "negative-priceChange" } `}> 
            <p>{coin.priceChangeINR > 0 ? <BiSolidUpArrow /> : <BiSolidDownArrow/>}{coin.priceChangeINR}%</p>
            </div>
            
          </div>
        ))}
     
        {/* </div> */}
      </div>
    </div>
  )
}

export default TrendinCoins
