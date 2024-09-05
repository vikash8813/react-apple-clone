import React from "react";
import Air1 from "./Air1";
import Air2 from "./Air2";
import Air3 from "./Air3";
import Air4 from "./Air4";
import Head from "../jsx/Header";
import Foot from "../jsx/footer";

export default function AirPods(){
    return(
        <div>
            <Head></Head>
        <Air1></Air1>
        <Air2></Air2>
        <Air3></Air3>
        <Air4></Air4>
        <Foot></Foot>
        </div>
    )
}