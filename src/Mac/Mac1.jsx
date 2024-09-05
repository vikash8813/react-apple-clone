import React from "react";
import './Mac1.css';
const a="https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/large.mp4#t=10.921048";


export default function Mac1(){
    return(
        <div className="Mac1">

            <div className="Mac1n1">
            <h1>Mac</h1>
            <div>
            <h2>If you can dream it,</h2>
            <h2>Mac can do it.</h2>
            </div>
            </div>

            <video src={a} autoPlay loop muted ></video>
        </div>
    )
}
