import React from "react";
import Ipad1 from "./ipad1.jsx";
import Ipad2 from "./ipad2.jsx";
import Ipad3 from "./ipad3.jsx";
import Ipad4 from "./ipad4.jsx";
import Head from "../jsx/Header.jsx";
import Foot from "../jsx/footer.jsx";

export default function Ipad(){
    return(
        <div>
          <Head></Head>
          <Ipad1></Ipad1>
          <Ipad2></Ipad2>
          <Ipad3></Ipad3>
          <Ipad4></Ipad4>
          <Foot></Foot>
        </div>
    )
}