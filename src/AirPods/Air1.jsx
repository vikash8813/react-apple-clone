import React, { useState } from "react";
import './Air1.css';
import videobg from "./large.mp4";
import { useNavigate } from "react-router-dom";

export default function Air1(){
 

  

  const navigate =useNavigate();
    return(
     <div className="Air1">
       <video id="myVideo" src={videobg} autoPlay loop muted></video>
        <h1>AirPods Pro</h1>
        <p>2nd generation</p>
        <h5>MRP $300</h5>
        <button onClick={()=>{navigate("/BuyAirpodsPro")}} className="Airb1">Buy</button>
        <a href="/Store">Store</a>
       
     </div>
       
    )
}