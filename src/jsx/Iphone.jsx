import React from "react";
import "../css/iphone.css"
import { useNavigate } from "react-router-dom";

export default function Iphone(){
    const navigate = useNavigate();
    return (
        <div className="iphonew">
            <p className="iphone">iPhone 15 Pro</p>
            <h2 className="Titanium">Titanium.So strong. So light.So Pro.</h2>
            <div>
                <button onClick={()=>{navigate("/Store")}} className="learn">Learn more</button>
                <button onClick={()=>{navigate("/Iphone")}} className="buy3">Buy</button>
            </div>
            <img className="photo" src="https://www.apple.com/v/iphone-15-pro/c/images/meta/iphone-15-pro_overview__f8jz7aagka2q_og.png?202407180218"></img>

        </div>
    )
}
