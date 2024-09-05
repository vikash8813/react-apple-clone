import React from "react";
import "./Mix4n1.css";
const a="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMYW3?wid=940&hei=1112&fmt=png-alpha&.v=1646446502358";


export default function Mix4n1(){
    return(
        <div className="Mix4n1">
            <img src={a}></img>
            <a>Studio Display</a>
            <h5>MRP $2000 (inc. all taxes)</h5>
        </div>
    )
}