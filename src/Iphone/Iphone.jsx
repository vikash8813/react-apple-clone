import React from "react";
import Iphone1 from "./iphone1";
import Iphone2 from "./iphone2";
import Iphone3 from "./Iphone3";
import Iphone4 from "./Iphone4";
import Iphone5 from "./iphone5";
import Head from "../jsx/Header";
import Foot from "../jsx/footer";

export default function Iphonemain(){
    return(
        <div>
         <Head></Head>
        <Iphone1></Iphone1>
        <Iphone2></Iphone2>
        <Iphone3></Iphone3>
        <Iphone4></Iphone4>
        <Iphone5></Iphone5>
        <Foot></Foot>
        </div>
    )
}