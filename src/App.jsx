import { useState, useEffect } from 'react'
import "./index.css";
import Navbar from './componenets/navBar/Navbar';
import Content from './componenets/content/Content';


function App() {

  const [data, setData]= useState(null);
  const [usdValue, setUsdValue] =useState();
  const [inrValue, setInrValue] =useState();
  const [usd24hrChange, setUsd24hrChange] =useState();
  
useEffect(()=>{

  const fetchData = async () =>{
    try {
      const response= await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true")
      const jasonData = await response.json();
      setData(jasonData);
      const options = { maximumFractionDigits: 2 };
      let USD_Value= jasonData.bitcoin.usd.toLocaleString('en-US', options);
      let INR_Value= jasonData.bitcoin.inr.toLocaleString('en-US', options);
      const priceChangeUSD = parseFloat(jasonData.bitcoin.usd_24h_change).toFixed(2);
      setUsdValue(USD_Value)
      setInrValue(INR_Value)
      setUsd24hrChange(priceChangeUSD);
      
    } catch (error) {
      console.error('Error while fetching the data', error);
    }
  }

  fetchData();
  
},[])




  let BTC= fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2C%20usd&include_24hr_change=true")

  return (
    <div>
      <Navbar/>
      <Content usdValue={usdValue} inrValue={inrValue} usd24hrChange={usd24hrChange}/>
    </div>
  )
}

export default App
