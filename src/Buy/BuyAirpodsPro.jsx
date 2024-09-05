import React from "react";
import BuyWatch from "./BuyWatch";
const a="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985";
import Head from "../jsx/Header";
export default function Buya1(){
    
    return(
        <div>
            <Head></Head>
           <BuyWatch image={a} name="Airpods Pro" price="300" first="Airpods pro"
           second="Second genration" pfirst="Custom high dynamic range amplifier" psecond="Transparency mode"
           pthird="Skin-detect sensor" pfourth="Siri Supported" sizef="Without Magsafe"
           sizes="With Magsafe" GPSf="Lightning Port" GPSs="USB-C" prop1="Magsafe" prop2="Port Type"
           >
           </BuyWatch>
        </div>
    )
}