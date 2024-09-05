import React from "react";

const a="https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_10th_gen__ej5p5x6yf2gm_large.png";

import { useNavigate } from "react-router-dom";

export default function Ipad2n3(){
    const navigate = useNavigate();
    return(
        <div className="ipad2n1">
            <img src={a}></img>
            <p>New Price</p>
            <h5>iPad </h5>
            <h3>The colourful, all‑screen iPad for </h3>
            <h4>the things you do every day.</h4>
            <h2>From $500</h2>
            <button navigate={"/Store"}> Learn more</button>
            <a href="/BuyIPad">Buy</a>
        </div>
    )
}
