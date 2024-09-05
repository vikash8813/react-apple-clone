import React from "react";
import "./Tv2.css";
const a ="https://variety.com/wp-content/uploads/2023/01/Apple-HomePod.jpg";
const b="https://i.ytimg.com/vi/861Dt8Fy0IA/maxresdefault.jpg";
import { useNavigate } from "react-router-dom";

export default function Tv2(){
    const navigate =useNavigate();
    return(
        <div className="Tv2">
        <div className="Tv2new">
        <p>HomePod</p>
        <h1>Profound sound.</h1>
        <p>MRP $300</p>
        <div>     
        <button onClick={()=>{navigate("/BuyHomePod")}} className="b1">Buy</button>
        <button className="b2">Store</button>
        </div>
       <img src={a}></img>
        </div>
      
        <div className="Tv2new2">
        <p>HomePod mini</p>
        <h1>Surprising sound for size</h1>
        <p>MRP $150</p>
        <div>     
        <button onClick={()=>{navigate("/BuyHomePodmini")}} className="b3">Buy</button>
        <button className="b4">Store</button>
        </div>
       <img src={b}></img>
        </div>

        </div>
    )
}