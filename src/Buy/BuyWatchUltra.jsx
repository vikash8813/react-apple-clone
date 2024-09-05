import React from "react";
import BuyWatch from "./BuyWatch";
const a="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507270905";
import Head from "../jsx/Header";

export default function Buyw3(){
    
    return(
        <div>
            <Head></Head>
           <BuyWatch image={a} name="Apple Watch Ultra" price="1150" first="Stay Connected"
           second="With or without phone" pfirst="GPS+cellular" psecond="100m Water Resistant"
           pthird="Titanium Finish" pfourth="Certified IP6X dust resistant2" sizef="Dial size  44.0"
           sizes="Dial size 40.0" GPSf="GPS" GPSs="GPS+cellular" prop1="Size" prop2="GPS"
           >
           </BuyWatch>
        </div>
    )
}