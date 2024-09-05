import React from "react";
import "./ipad2n1.css";
const a='https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_large.png';
import { useNavigate } from "react-router-dom";


export default function Ipad2n1(){
    const navigate = useNavigate();
    return(
        <div className="ipad2n1">
            <img src={a}></img>
            <p>New</p>
            <h5>iPad Pro</h5>
            <h3>The ultimate iPad experience with the most</h3>
            <h4>advanced technology.</h4>
            <h2>From $1200</h2>
            <button navigate={"/Store"}> Learn more</button>
          <a href="/BuyIpadPro">Buy</a>
        </div>
    )
}
