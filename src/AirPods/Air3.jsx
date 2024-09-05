import React from "react";
import "./Air3.css";
const a="https://hnsgsfp.imgix.net/4/images/detailed/46/Airpods_(Main).jpg?fit=fill&bg=0FFF&w=1536&h=900&auto=format,compress";
import { useNavigate } from "react-router-dom";

export default function Air3(){
    const navigate =useNavigate();
    return(
        <div className="Air3">
           <img src={a}></img>
           <h1>AirPods</h1>
           <p>2nd generation</p>
           <h5>MRP $150</h5>
           <button onClick={()=>{navigate("/BuyAirpods2ndgen")}} className="Air3b1">Buy</button>
           <a>Store</a>
        </div>
    )
}