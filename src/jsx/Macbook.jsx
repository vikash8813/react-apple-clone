import React from "react";
import "../css/macbook.css"
const a="https://assets.mspimages.in/gear/wp-content/uploads/2022/08/Untitled-design.jpg";
import { useNavigate } from "react-router-dom";

export default function Mac(){
    const navigate = useNavigate();
    return (
        <div className="macbook">
            <p className="mac">MacBook Air</p>
            <p className="m3">Supercharged by M3.</p>
            <div>
            <button onClick={()=>{navigate("/Store")}} className="learn">Learn more</button>
            <button onClick={()=>{navigate("/Macnn")}} className="buy"> Buy</button>
            </div>
            <img  className="macp"  src={a}></img>
        </div>
    )
}