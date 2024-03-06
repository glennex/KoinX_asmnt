import React from 'react'
import { useState, useEffect } from 'react';
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import './trendingCoins.css'

function TrendinCoins() {
    const [topCoins, setTopCoins] = useState([]);

    useEffect(() => {
      const fetchTopCoins = async () => {
        try {
          const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
          const data = await response.json();
        //   console.log(data.coins);
          const topThreeCoins = data.coins.slice(0, 3).map(coin => {
            const priceChangeINR = parseFloat(coin.item.data.price_change_percentage_24h.inr).toFixed(2);
            return {
              name: coin.item.name,
              imageUrl: coin.item.small,
              symbol:coin.item.symbol,
              priceChangeINR: priceChangeINR
            };
          });
          setTopCoins(topThreeCoins);
        //   console.log(topThreeCoins);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchTopCoins();
    }, []);

  return (
    <div>
      <div className="trending-card">
        <h3>Trending Coins (24h)</h3>
        {/* <div className="trending-coins-list"> */}
          
        {topCoins.map((coin, index) => (
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
