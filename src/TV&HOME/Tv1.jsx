import React from "react";
import './Tv1.css';
const a="https://media.idownloadblog.com/wp-content/uploads/2024/04/HomePod-next-to-two-TV.jpg";


export default function Tv1(){
    return(
        <div className="Tv1">
         <img src={a}></img>
         <h1>The future hits home.</h1>
         <p>Simply connect your favourite devices and transform your house into a remarkably smart,</p>
        <p>convenient and entertaining home. Elevate movie night with theatre-like picture and sound.</p>
        <p>Play any song, in any room, from anywhere. And control lights, locks using Siri.</p>
       
        </div>
    )
}