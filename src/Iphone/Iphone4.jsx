import React from "react";
import "./Iphone4.css";
const a="https://www.apple.com/v/iphone/home/bv/images/overview/essentials/magsafe__bfji5hb1mqsy_large.jpg";
const b="https://www.apple.com/v/iphone/home/bv/images/overview/essentials/airtag__b5lt0bcbd9ua_large.jpg";


export default function Iphone4(){
    return(
        <div className="Iphone4">
           <h1>iPhone essentials.</h1>
           <div className="Iphone4n1">
            <div className="Iphone4n2">
                <h3>MagSafe</h3>
                <p>Snap on a magnetic case, wallet or both. And get fast and efficient</p>
                <p style={{marginBottom:30}}>wireless charging.</p>
                <a>Shop Magsafe accessories</a>
            <img src={a}></img>
            </div>

            <div className="Iphone4n2">
            <h3>AirTag</h3>
                <p>Attach one to your keys. Put another in your backpack. If they’re</p>
                <p style={{marginBottom:30}}>misplaced, just use the Find My app.</p>
                <a style={{marginLeft:290}}>Buy</a>
            <img src={b}></img>
                </div>
            </div>

        </div>
    )
}