import React from "react";
import "./Mix3n1.css";
const a ="https://iplanet.one/cdn/shop/files/iphone-15-silicone-case-with-magsafe-winter-blue_MT0Y3_AV6.png?v=1695640754&width=823";


export default function Mix3n1(){
    return(
        <div className="Mix3n1">
            <img src={a}></img>
            <a>iPhone 15 Silicone Case </a>
            <h5>MRP $80 (inc. all taxes)</h5>
        </div>
    )
}