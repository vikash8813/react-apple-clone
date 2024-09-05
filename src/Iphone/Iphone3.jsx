import React from "react";
import "./Iphone3.css";

const a="https://cdn.magzter.com/1346362564/1701097446/articles/Y6st-LQ-K1701149378165/MEET-THE-IPHONE-15.jpg";


export default function Iphone3(){
    return(
        <div className="Iphone3">
            <h1>Take a closer look at</h1>
            <h1>our latest models.</h1>

            <div className="Iphone3n1">
             <img src={a}></img>
             <h1>A Guided Tour of </h1>
             <h2>iPhone 15 & iPhone 15 Pro</h2>
             
            </div>
            <a href="https://www.youtube.com/watch?v=EcGXCJm3XMA"><button>Watch the film</button></a>
        </div>
    )
}