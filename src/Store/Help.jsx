import React from "react";
import "./Help.css";
import Help1 from "./Help1"
import Help2 from "./Help2";
import Help3 from "./Help3";

export default function Help(){
    return (
        <div className="help1">
             <p className="take"><span className="take2">Help is here.</span> Whenever and however you need it.</p>
        <div className="help2">
       <Help1></Help1>
       <Help2></Help2>
       <Help3></Help3>
        </div>
        </div>
    )
}