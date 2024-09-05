import React from "react";
import './iphone2.css';
const a="https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_15_pro__bpnjhcrxofqu_large.png";
const b="https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_15__fm75iyqlkjau_large.png";
const c="https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_14__cjgvgyn9cquu_large.png";



export default function Iphone2(){
    return (
        <div className="Iphone2">
            <h1>Explore the line-up.</h1>

            <div className="Iphone2n1">

                <div className="Iphone2n2">
                <img src={a}></img>
                <h2>iPhone 15 Pro</h2>
                <p>The ultimate iPhone.</p>
                <h3>Starting from $1500</h3>
                <button>Learn more</button>
                <a href="/BuyIphone15pro">Buy</a>
                </div>

                
                <div className="Iphone2n2">
                <img src={b}></img>
                <h2>iPhone 15 </h2>
                <p>A total powerhouse.</p>
                <h3>Starting from $1000</h3>
                <button>Learn more</button>
                <a href="/BuyIphone15">Buy</a>
                </div>

                <div className="Iphone2n2">
                <img src={c}></img>
                <h2>iPhone 14 </h2>
                <p>As amazing as ever</p>
                <h3>Starting from $900</h3>
                <button>Learn more</button>
                <a href="/BuyIphone14">Buy</a>
                </div>

            </div>
        </div>
    )
}