import React from "react";
import "./Linkdin.css";
const a ="https://imageio.forbes.com/specials-images/imageserve/641397e79f04500b85460b8f/Apple--iPhone-15--iPhone-15-Pro-Max--iPhone-15-Pro--iPhone-15-Pro-design--iPhone-15/0x0.jpg?format=jpg&crop=961,721,x344,y2,safe&width=960";


export default function Link(){
    return (
        <div className="Link1">

            <div className="Link2">
          <h1><span>Special stores.</span> Exclusive saving for my Linkedin followers. </h1>
            </div>

            <div className="Link3">
            <p> Followers</p>
            <h1>Buy a new Mac or iPad with </h1>
            <h1>followers saving.</h1>
           <img src={a}></img>
            </div>
        </div>
    )
}