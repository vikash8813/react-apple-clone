import BuyWatch from "./BuyWatch";
const a="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005";
import Head from "../jsx/Header";
export default function Buya3(){
    
    return(
        <div>
            <Head></Head>
           <BuyWatch image={a} name="Airpods " price="150" first="Airpods "
           second="2nd genration" pfirst="Custom high-excursion Apple driver" psecond="Skin-detect sensor"
           pthird="Motion-detecting accelerometer" pfourth="Siri Supported" sizef="Without Magsafe"
           sizes="With Magsafe" GPSf="Lightning Port" GPSs="USB-C" prop1="Magsafe" prop2="Port Type"
           >
           </BuyWatch>
        </div>
    )
}