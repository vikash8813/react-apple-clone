import React from "react";
import "./Air4.css";
import Air4n1 from "./Air4n1";
import Air4n2 from "./Air4n2";
import Air4n3 from "./Air4n3";
import Air4n4 from "./Air4n4";

export default function Air4(){
    return(
        <div className="Air4">

            <div className="Air4new1">
            <h1>A magical connection to</h1>
            <h1>your devices.</h1>
            </div>

            <div className="Air4new2">
            <Air4n1></Air4n1>
           <Air4n2></Air4n2>
           <Air4n3></Air4n3>
           <Air4n4></Air4n4>
            </div>
            
        </div>
    )
}