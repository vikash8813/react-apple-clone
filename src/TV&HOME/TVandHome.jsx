import React from "react";
import Tv1 from "./Tv1";
import Tv2 from "./Tv2";
import Tv3 from "./Tv3";
import Tv4 from "./Tv4";
import Head from "../jsx/Header";
import Foot from "../jsx/footer";

export default function TvandHome(){
    return(
        <div>
            <Head></Head>
            <Tv1></Tv1>
            <Tv2></Tv2>
            <Tv3></Tv3>
            <Tv4></Tv4>
            <Foot></Foot>
        </div>
    )
}