import React from "react";
import "./Tv3.css";
const a ="https://m.media-amazon.com/images/I/616bgkA2J0L._AC_UF1000,1000_QL80_.jpg";
const b="https://images.deccanherald.com/deccanherald%2F2024-07%2F1a9a3738-ad94-4762-a260-668cccf5ec6f%2FApple%20iOS%2018's%20India-specific%20features.jpg?format=webp&q=70&w=400&dpr=2";
import { useNavigate } from "react-router-dom";



export default function Tv3(){
    const navigate=useNavigate();
    return(
        <div className="Tv3">
        <div className="Tv3new">
        <p>Apple Tv 4K</p>
        <h1>The ultimate TV</h1>
        <h1>experience is calling.</h1>
        <p>MRP $200</p>
        <div>     
        <button onClick={()=>{navigate("/BuyAppleTV")}} className="b1">Buy</button>
        <button className="b5">Store</button>
        </div>
       <img src={a}></img>
        </div>
      
        <div className="Tv2new4">
        <p>Home</p>
        <h1>The foundation</h1>
        <h1 style={{marginBottom:100}}>for a smarter home.</h1>
       <a>Store</a>
        <img src={b}></img>
        </div>

        </div>
    )
}