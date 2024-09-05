import React from "react";
import Support2 from "./Support2";
import Head from "../jsx/Header";
import Support1 from "./Support1";
import Support3 from "./Support3";
import Foot from "../jsx/footer";

export default function Support(){
    return(
        <div>
            <Head></Head>
            <Support1></Support1>
            <Support2></Support2>
            <Support3></Support3>
            <Foot></Foot>
        </div>
    )
}