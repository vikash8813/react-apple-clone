import React from "react";
import "./Mac3n1.css";
const a="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png";
const b="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png";
import { useNavigate } from "react-router-dom";

export default function Mac3n1(){
    const navigate = useNavigate();
    return(
        <div className="Mac3n1">

            <div className="Mac3n1n1">
            <img src={a}></img>
            <h2>MacBook Air 13” and 15”</h2>
            <h3> M2 or M3 chip</h3>
            <p>Strikingly thin and fast so you can</p>
            <p>work, play or create anywhere.</p>
            <h3>From $1200</h3>
            <button onClick={()=>{navigate("/Store")}}>Learn more</button>
            <button onClick={()=>{navigate("/BuyMac")}}>Buy</button>
            </div>

            <div className="Mac3n1n1">
            <img src={b}></img>
            <h2>MacBook Air 14” and 16”</h2>
            <h3> M3, M3 Pro or M3 Max chip</h3>
            <p>The most advanced Mac laptops</p>
            <p>for demanding workflows.</p>
            <h3>From $2000</h3>
            <button onClick={()=>{navigate("/Store")}}>Learn more</button>
            <button onClick={()=>{navigate("/BuyMac14")}}>Buy</button>
            </div>
          
        </div>
    )
}