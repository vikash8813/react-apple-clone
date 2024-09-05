import React from "react";
import "./Best.css";
import Image from "./images";

export default function Best(){
    return (
        <div>
            <div className="love">
              <div  className="products">
                <p className="way"> <span className="sto">Store</span>.The best way to buy the products you love. </p>
                </div>
                <div className="Assistant">
                    <div className="Assistanta">
                    <img className="rajiv" src="src\Store\WhatsApp Image 2024-08-05 at 12.14.19 PM.jpeg"></img>
                    <p style={{marginLeft:10}}>Need Shooping helps?</p>
                    </div>
                    <a style={{marginLeft:60}}>Ask our Specailist</a>
                </div>
            </div>
            
            <Image></Image>

        </div>
    )
}