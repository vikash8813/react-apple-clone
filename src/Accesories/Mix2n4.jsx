import React from "react";
import "./Mix2n4.css";
const a="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684474533/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/243632_0_eevs7d.png?tr=w-600";


export default function Mix2n4(){
    return(
        <div className="Mix2n4">
          <img src={a}></img>
          <p>New</p>
          <a>Smart folio for ipad mini</a>
          <h5>MRP $100 (inc. all taxes)</h5>
        </div>
    )
}