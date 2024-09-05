import React from "react";
import './ipad3.css';
const a="https://www.apple.com/in/ipad/home/images/overview/essentials/bc_pencil__b1ze600aojyq_large.png";
const b="https://www.apple.com/in/ipad/home/images/overview/essentials/bc_keyboard__b2j4vh67cw76_large.png";


export default function Ipad3(){
    return(
        <div className="Ipad3">
            <h1>iPad essentials.</h1>

            <div className="ipad3n1"> 

            <div className="ipad3n2">
            <p>New</p>
            <h1>Apple Pencil</h1>
            <h5>Dream it up.Jo it down.</h5>
            <a>Learn More</a>
            <img src={a}></img>
            </div>

            <div className="ipad3n2">
            <img className="ipad3n3" src={b}></img>
            
            <p>New</p>
            <h1>Keyboards for iPad</h1>
            <h5>Type it out. Take it with you.</h5>
            <a>Learn More</a>
            
            </div>

            </div>

        </div>
    )
}