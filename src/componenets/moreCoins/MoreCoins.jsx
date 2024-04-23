import React from "react";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import "./moreCoins.css";

function MoreCoins({ trendinCoins, usdValue}) {
  const slideLeft = () => {
    var slider = document.getElementById("coinItemsSlider");
    slider.scrollTo({
      left: slider.scrollLeft - 500,
      behavior: "smooth",
    });
  };
  const slideRight = () => {
    var slider = document.getElementById("coinItemsSlider");
    slider.scrollTo({
      left: slider.scrollLeft + 500,
      behavior: "smooth",
    });
  };

  console.log(usdValue,trendinCoins);

  return (
    <div>
      <div className="mayLike-div">
        <h2>You May Also Like</h2>
        <div className="Slider-container">
          <div onClick={slideLeft} className="navigateSlider navigate_prev">
            <MdNavigateBefore />
          </div>
          <div id="coinItemsSlider" className="coinItems">
            {trendinCoins.map((coin) => {
              return (
                <div className="trending-coin-list-container">
                  <div className="list_top">
                    <img src={coin.imageUrl} />
                    <p>{coin.symbol}</p>
                    <p className={`priceChange-indicator ${coin.priceChangeINR > 0 ? "positive-priceChange": "negative-priceChange" } `}>{coin.priceChangeINR}%</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}><BsCurrencyDollar/>{coin.price}</div>
                  <div style={{width:"100%",textAlign:"center"}}><img src={coin.graph}/></div>
                </div>
              );
            })}
          </div>
          <div onClick={slideRight} className="navigateSlider navigate_nxt">
            <MdNavigateNext />
          </div>
        </div>
      </div>
      <div className="trending-div"></div>
    </div>
  );
}

export default MoreCoins;
