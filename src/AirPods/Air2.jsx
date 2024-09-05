import React from "react";
import "./Air2.css";
const a="https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg";
import { useNavigate } from "react-router-dom";

export default function Air2(){
    const navigate =useNavigate();
    return(
        <div className="Air2">
            <img src={a}></img>
            <h1>AirPods</h1>
            <p>3rd generation</p>
            <h5>MRP $250</h5>
            <button onClick={()=>{navigate("/BuyAirpods3rdgen")}} className="Air2b1">Buy</button>
            <a>Store</a>
        </div>
    )
}