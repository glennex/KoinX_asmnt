import { useState, useEffect } from 'react'
import "./index.css";
import Navbar from './componenets/navBar/Navbar';
import Content from './componenets/content/Content';


function App() {

  const [data, setData]= useState(null);
  
useEffect(()=>{

  const fetchData = async () =>{
    try {
      const response= await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2C%20usd&include_24hr_change=true")
      const jasonData = await response.json();
      setData(jasonData);
      console.log(jasonData.bitcoin.inr_24h_change);
      
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
      <Content/>
    </div>
  )
}

export default App
