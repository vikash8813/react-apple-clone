import React from "react";
import "./Latest.css";
import Latest2 from "./Latest2";
import Latest3 from "./Latest3";
import Latest4 from "./Latest4";
import Latest5 from "./Latest5";
import Latest6 from "./Latest6";
import Latest7 from "./Latest7";
import Latest8 from "./Latest8";

export default function Latest(){
    return (
        <div className="new">
            <div className="new2">
                <p className="new3"><span className="new4">The latest.</span> Take a look at what's new right now.</p>
                
            </div>
            <div className="new5">
                    <Latest2></Latest2>
                    <Latest3></Latest3>
                    <Latest4></Latest4>
                   <Latest5></Latest5>
                    <Latest6></Latest6>
                    <Latest7></Latest7>
                    <Latest8></Latest8>
                </div>
        </div>
    )
}