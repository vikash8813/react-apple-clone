import React from "react";
import "./Air4n1.css";
const a ="https://cdsassets.apple.com/live/7WUAS350/images/airpods/ios16-iphone13-pro-airpods-setup.png";


export default function Air4n1(){
    return(
        <div className="Air4n1">
            <img src={a}></img>
            <div className="Air4n1n1">
                <p>
                    One-tap setup
                </p>
                <button>
                    +
                </button>
            </div>
        </div>
    )
}