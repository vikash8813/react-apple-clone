import React from "react";
import "../css/Header.css";
import { useNavigate } from "react-router-dom";
 

 export default function Head(){
    const navigate = useNavigate();
    return (
        <div>
            
       <header>
        <img className="apple" src="data:image/jpeg;base64,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"></img>
     
        <a href="/" className="a">Home</a>
        <a href="/store" className="a" >Store</a>
        <a href="/Macnn" className="a">Mac</a>
        <a href="Ipad" className="a">ipad</a>
        <a href="/Iphone" className="a">iPhone</a>
        <a href="/Watch" className="a">Watch</a>
        <a href="/AirPods" className="a">Airpods</a>
        <a href="/Tv&Home" className="a">TV &Home</a>
        
        <a href="/Accessories" className="a">Accessories</a>
        <a href="/Support" className="a">Support</a>

       
       </header>

       <div>
        <p className="p">Get iPhone 15 Pro from ₹5621.00/mo.‡ for 24 mo. with No Cost EMI from most leading banks.<span><a className="b" href="/BuyIphone15pro">Buy now iE</a></span></p>
       </div>

       </div>
    )
}