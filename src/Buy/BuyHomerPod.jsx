import BuyWatch from "./BuyWatch";
const a="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-select-202210?wid=1080&hei=1080&fmt=jpeg&qlt=95&.v=1670557209908";
import Head from "../jsx/Header";
export default function Buyh1(){
    
    return(
        <div>
            <Head></Head>
           <BuyWatch image={a} name="HomePod " price="350" first="HomePod "
           second="Be Perfect" pfirst="High quality sound" psecond="Audio Detectedion"
           pfourth="Siri Supported" sizef="White"
           sizes="Black" GPSf="Without Apple music" GPSs="With Apple music" prop1="Colour" prop2="Apple Music"
           >
           </BuyWatch>
        </div>
    )
}