import React from "react";
import "./Mix2n1.css";
const a="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697020668/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/194594_0_retff2.png?tr=w-600";


export default function Mix2n1(){
    return(
        <div className="Mix2n1">
            <img src={a}></img>
            <p>New</p>
            <a>Apple pencil pro</a>
            <h5> MRP $150 (inc. all taxes)</h5>
        </div>
    )
}