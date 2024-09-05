import React from "react";
import "./Support3.css";
const a="https://rukminim2.flixcart.com/image/850/1000/xif0q/keyboard/tablet-keyboard/o/f/a/edge-magic-style-magnetic-keyboard-case-for-ipad-10th-generation-original-imagh7czct9vg7ky.jpeg?q=90&crop=false";
const b="Some counterfeit and third-party power adapters and batteries may not be designed properly and could";
const c="result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we";
const d="recommend visiting an Apple Authorised Service Provider. If you need a replacement adapter to charge";
const e="your Apple device, we recommend getting an Apple power adapter.";



export default function Support3(){
    return(
        <div className="Support3">
            <div className="Support3new1">
            <h1>Apple Support on YouTube</h1>
            <p>Check out our official YouTube channel to help you get the most from your Apple devices and services.</p>
            <a>Visit Apple Support on YouTube</a>
            <img src={a}></img>
            </div>

            <div className="Support3new2">
          <h1>My Support</h1>
          <p>Get up-to-date information about your Apple products including cover, repairs and much more.</p>
            <a>Sign in to My Support</a>
            </div>

            <div className="Support3new3">
            <h1>Beware of counterfeit parts</h1>
            <p>{b}</p>
            <p>{c}</p>
            <p>{d}</p>
            <p>{e}</p>
            </div>
        </div>
    )
}