import React from "react";
import "./Mac3.css";
import Mac3n1 from "./Mac3n1";
import Mac3n2 from "./Mac3n2";
import Mac3n3 from "./Mac3n3";

export default function Mac3(){
    return(
        <div className="Mac3">
            <h1>Explore the line-up.</h1>
            <Mac3n1></Mac3n1>
            <Mac3n2></Mac3n2>
           <Mac3n3></Mac3n3>
        </div>
    )
}