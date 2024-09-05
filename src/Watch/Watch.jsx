import React from "react";
import Watch1 from "./Watch1";
import Watch2 from "./Watch2";
import Watch3 from "./Watch3";
import Watch4 from "./Watch4";
import Head from "../jsx/Header";
import Foot from "../jsx/footer";

export default function Watch(){
    return(
        <div>
            <Head></Head>
           <Watch1></Watch1>
           <Watch2></Watch2>
           <Watch3></Watch3>
           <Watch4></Watch4>
           <Foot></Foot>
        </div>
    )
}