import React from "react";
import "./Mix3.css";
import Mix3n1 from "./Mix3n1";
import Mix3n2 from "./Mix3n2";
import Mix3n3 from "./Mix3n3";
import Mix3n4 from "./Mix3n4";

export default function Mix3(){
    return(
        <div className="Mix3new1">
            <h1>Featured iPhone Accessories</h1>

            <div className="Mix3new2">
            <Mix3n1></Mix3n1>
            <Mix3n2></Mix3n2>
            <Mix3n3></Mix3n3>
            <Mix3n4></Mix3n4>
            </div>

        </div>
    )
}