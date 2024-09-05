import React from "react";
import "./Watch3.css";
const a ="https://www.apple.com/v/watch/bn/images/overview/essentials/banner_bands__fa2yj1435ia2_large.jpg";
const b="https://www.aptronixindia.com/media/catalog/product/a/i/airpods-max-select-skyblue-202011.png";


export default function Watch3(){
    return(
        <div className="Watch3">
            <h1>Apple Watch essentials.</h1>

            <div className="Watch3n1">

            <div className="Watch3n2">
                <div className="Watch3n21">
                <h3>Arm candy.</h3>
            <h3 style={{height:25}}>In all-new flavours.</h3>
            <a>Shop Apple Watch straps</a>
                </div>
            <img src={a}></img>
            </div>

            <div className="Watch3n2">
                <div className="Watch3n21">
                <h3>Magic runs</h3>
            <h3 style={{height:25}}>in the family.</h3>
            <p>Explore all AirPods models and</p>
            <p>find the best ones for you.</p>
                </div>
            <img src={b} style={{width:280,paddingLeft:130}}></img>
            </div>
            

            </div>

        </div>
    )
}