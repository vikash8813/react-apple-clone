import React from "react";
const a="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_studio_display__c0gbtkgtsx0m_large.png";
const b="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_pro_display__duklzyfwl92e_large.png";

import { useNavigate } from "react-router-dom";

export default function Mac3n3(){
    const navigate = useNavigate();
    return(
        <div  className="Mac3n1">
                
                <div className="Mac3n1n1">
            <img src={a}></img>
            <h2>Studio Display</h2>
            <h3> </h3>
            <p>A 5K Retina display with stellar camera</p>
            <p>and audio.</p>
            <h3>From $2000</h3>
            <button onClick={()=>{navigate("/Store")}} >Learn more</button>
            <button onClick={()=>{navigate("/BuyStudioDisplay")}}>Buy</button>
            </div>

            <div className="Mac3n1n1">
            <img src={b}></img>
            <h2>Pro Display XDR</h2>
            <h3></h3>
            <p>An advanced 6K XDR display for</p>
            <p>pro workflows.</p>
            <h3>From $4500</h3>
            <button onClick={()=>{navigate("/Store")}}>Learn more</button>
            <button onClick={()=>{navigate("/BuyProXDR")}}>Buy</button>
            </div>
          
              </div>
    )
}