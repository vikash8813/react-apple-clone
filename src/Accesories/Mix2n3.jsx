import React from "react";
import "./Mix2n3.css";
const a="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684474953/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/264326_0_gyyggg.png?tr=w-600";


export default function Mix2n3(){
    return(
        <div className="Mix2n3">
        <img src={a}></img>
        <p>New</p>
        <a>Smart Folio for iPad Pro 13</a>
        <h5>MRP $150 (inc. all taxes)</h5>
        </div>
    )
}