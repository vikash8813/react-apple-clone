import React from "react";
import "./Watch.css";
const a="https://www.apple.com/105/media/ww/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/large.mp4";


export default function Watch1(){
    return(
        <div className="Watch1">
         <div className="Watch1n1">
            <h1> Apple Watch </h1>
            <p>To wear it is to love it.</p>
         </div>
         <div className="Watch1n2">
         <video src={a} autoPlay loop muted></video>
         </div>
        
        </div>
    )
}