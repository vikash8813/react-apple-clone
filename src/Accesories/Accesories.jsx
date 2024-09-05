import React from "react";
import Mix from "./Mix";
import Mix2 from "./Mix2";
import Mix3 from "./Mix3";
import Mix4 from "./Mix4";
import Head from "../jsx/Header";
import Foot from "../jsx/footer";

export default function Acc(){
    return(
        <div>
              <Head></Head>
        <Mix></Mix>
        <Mix2></Mix2>
        <Mix3></Mix3>
        <Mix4></Mix4>
      
        <Foot></Foot>
        </div>
    )
}