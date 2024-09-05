import BuyWatch from "./BuyWatch";
const a="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-202210?wid=1080&hei=880&fmt=jpeg&qlt=95&.v=1720816295293";
import Head from "../jsx/Header";
import Modal from "./Modal"
import "./Buyhome.css";
import { useState } from "react";

export default function Buyh2(){
        const [state, setstate]=useState(false);


    return(
        <div>
            <Head></Head>

           
           
           <BuyWatch image={a} name="HomePod mini " price="150" first="HomePod mini "
           second="Speaker of house" pfirst="High quality sound" psecond="Audio Detectedion"
           pfourth="Siri Supported" sizef="White"
           sizes="Black" GPSf="Without Apple music" GPSs="With Apple music" prop1="Colour" prop2="Apple Music"
           >
           </BuyWatch>

          
        
        </div>
    )
}