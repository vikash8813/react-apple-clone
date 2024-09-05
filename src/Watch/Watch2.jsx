import React from "react";
import './Watch2.css';
const a="https://www.apple.com/v/watch/bn/images/overview/select/product_se__frx4hb13romm_large.png";
const b="https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_large.png";
const c="https://www.apple.com/in/watch/images/overview/select/product_u2__ebztafh9rvau_large.png";
import { useNavigate } from "react-router-dom";

export default function Watch2(){
    const navigate = useNavigate();
    return(
        <div className="Watch2">
            <h1>Explore the line-up</h1>

            <div className="Watch2n1">

            <div className="Watch2n2">
            <img src={a}></img>
            <h2>Apple Watch SE</h2>
            <p>All the essentials.</p>
            <p>Light on price.</p>
            <h5>From $350</h5>
            <button onClick={()=>{navigate("/BuyWatchSE")}}>Buy</button>
            <a href="/Store">Store</a>
            </div>

            <div className="Watch2n2">
            <img src={b}></img>
            <h2>Apple Watch Series 9</h2>
            <p>Powerful sensors,</p>
            <p>advanced health features.</p>
            <h5>From $500</h5>
            <button onClick={()=>{navigate("/BuyWatchSeries9")}}>Buy</button>
            <a href="/Store">Store</a>
            </div>

            <div className="Watch2n2">
            <img src={c}></img>
            <h2>Apple Watch Ultra 2</h2>
            <p>The most rugged</p>
            <p>and capable.</p>
            <h5>From $1150</h5>
            <button onClick={()=>{navigate("/BuyWatchUltra")}}>Buy</button>
            <a href="/Store">Store</a>
            </div>

            </div>

        </div>
    )
}