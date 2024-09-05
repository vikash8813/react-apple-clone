import React from "react";
import "./ipad1.css";
const a="https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/large.mp4";


export default function Ipad1(){
    return(
        <div className="ipad1n1">
            <div className="ipad1n2">
            <h1>iPad</h1>
            <div>
            <p>Touch, draw and type</p>
            <p>on one magical device.</p>
            </div>
            
           
            </div>
            <video src={a} autoPlay loop muted></video>
        </div>
    )
}
