import React from "react";
import Best from "./Best";
import Latest from "./Latest";
import Help from "./Help";
import Link from "./Linkdin";
import Snotice from "./Snotice";
import Head from "../jsx/Header";
import Foot from "../jsx/footer";

export default function Store(){
    return (
        <div>
        <Head></Head>
        <Best></Best>
        <Latest></Latest>
        <Help></Help>
        <Link></Link>
        <Snotice></Snotice>
        <Foot></Foot>
        </div>
    )
}