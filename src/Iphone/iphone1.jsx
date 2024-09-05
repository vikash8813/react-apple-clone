import React from "react";
import "./Iphone1.css";
const a="https://www.apple.com/105/media/ww/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/large.mp4";


export default function Iphone1(){
    return(
        <div className="Iphone1">
            <div className="Iphone1n2">
            <h1>iPhone</h1>
            <p>Designed to be loved.</p>
            </div>
            

            <div className="Iphone1n1">
            <video src={a} autoPlay loop muted ></video>
            </div>
           
        </div>
    )
}