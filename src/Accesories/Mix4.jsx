import React from "react";
import "./Mix4.css";
import Mix4n1 from "./Mix4n1";
import Mix4n2 from "./Mix4n2";
import Mix4n3 from "./Mix4n3";
export default function Mix4(){
    return(
        <div className="Mix4">
            <h1>Featured Mac Accessories</h1>
            <div className="Mix4new">
            <Mix4n1></Mix4n1>
            <Mix4n2></Mix4n2>
            <Mix4n3></Mix4n3>
            </div>
        </div>
    )
}