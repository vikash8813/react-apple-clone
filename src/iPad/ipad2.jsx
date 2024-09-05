import React from "react";
import "./ipad2.css";
import Ipad2n1 from "./ipad2n1";
import Ipad2n2 from "./ipad2n2";
import Ipad2n3 from "./ipad2n3";

export default function Ipad2(){
    return(
        <div className="ipad2">
            <h1>Explore the line-up.</h1>
            <div className="ipad2nn">
            <Ipad2n1></Ipad2n1>
            <Ipad2n2></Ipad2n2>
            <Ipad2n3></Ipad2n3>
            </div>
           
        </div>
    )
}