import React from "react";
import BuyWatch from "./BuyWatch";
const a="https://m.media-amazon.com/images/I/713BLl3u37L._SX679_.jpg";
import Head from "../jsx/Header";
export default function Buyw1(){
    
    return(
        <div>
            <Head></Head>
           <BuyWatch image={a} name="Apple Watch SE" price="400" first="Stay Connected"
           second="With or without phone" pfirst="GPS+cellular" psecond="Silver case"
           pthird="With diffrenet bands" pfourth="Siri Supported" sizef="Dial size  44.0"
           sizes="Dial size 40.0" GPSf="GPS" GPSs="GPS+cellular" prop1="Size" prop2="GPS"
           >
           </BuyWatch>
        </div>
    )
}