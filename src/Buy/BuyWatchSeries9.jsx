import React from "react";
import BuyWatch from "./BuyWatch";
const a="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT463ref_VW_34FR+watch-case-45-stainless-gold-s9_VW_34FR+watch-face-45-stainless-gold-s9_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=N3BCckx6eVlTU2FoVlF5SVR3aG4xNXVsTWtoL3UvVVIySFozL2tLNWx3cXdwU3BCUnNDZE1jRWJnOTI1azlxYzRkRmdBN2dmcTNSRWdCUXB1dXdLWnNraDAzeEVXdWtnMXFad015bVA5K2ZTeERoWXl1b0Z6OTFYMXVycEo0SmUvSGZXS0h3dGNjem1SQ2ZtQTd5MEtKdCtjanNSR3I0b2ZzaC9XVGo3anVzYlh2NG8wVjlsTCtqMWFNc20rOXN6U0F6K21nVVlsUGsrNys1dTZDZXVlQ3M2QXRhakE1UVRPajVaeGV3WnE2cz0=";
import Head from "../jsx/Header";

export default function Buyw2(){
    
    return(
        <div>
            <Head></Head>
           <BuyWatch image={a} name="Apple Watch Series 9" price="500" first="Stay Connected"
           second="With or without phone" pfirst="GPS+cellular" psecond="Silver case"
           pthird="With diffrenet bands" pfourth="Siri Supported" sizef="Dial size  44.0"
           sizes="Dial size 40.0" GPSf="GPS" GPSs="GPS+cellular" prop1="Size" prop2="GPS"
           >
           </BuyWatch>
        </div>
    )
}