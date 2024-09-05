import React from "react";
import "./Mix3n2.css";
const a ="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714970447/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/306643_qpnibb.png?tr=w-600";


export default function Mix3n2(){
    return (
        <div className="Mix3n2">
           <img src={a}></img>
           <a>20 USB-C Power Adapter</a>
           <h5>MRP $40 (inc. all taxes)</h5>
        </div>
    )
}