import React from "react";
import "./Mac2.css";
const a="https://images.indianexpress.com/2021/03/APple-FB.jpg";


export default function Mac2(){
    return(
        <div id="Macmini" className="Mac2">
            <h1>Go further with Mac.</h1>
            <img src={a}></img>
            <div>
            <h2>Study with Mac</h2>
            </div>
            
           <a href="https://www.youtube.com/watch?v=0pg_Y41waaE"> <button >Watch the film</button></a> 
        </div>
    )
}