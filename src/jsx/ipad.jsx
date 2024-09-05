import React from "react";
import "../css/ipad.css"
import { useNavigate } from "react-router-dom";


export default function Ipad(){
    const navigate = useNavigate();
    return (
        <div className="ipadw">
            <img  className="ipad" src="https://offers.applenews.apple/api/storage/images/6372d593d45d6f000717e885/en-us-large@1x.png"></img>
            <button  onClick={()=>{navigate("/Store")}} className="Shop">Shop</button>
        </div>
    )
}