import React from "react";
import './Mix3n3.css';
const a="https://photos5.appleinsider.com/price_guide/magsafe-accessories-pp-header.png";


export default function Mix3n3(){
    return(
        <div className="Mix3n3">
            <img src={a}></img>
            <a>Magsafe charger</a>
            <h5>MRP $90 (inc. all taxes)</h5>
        </div>
    )
}