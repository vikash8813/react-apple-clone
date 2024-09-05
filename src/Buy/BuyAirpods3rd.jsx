import BuyWatch from "./BuyWatch";
const a="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000";
import Head from "../jsx/Header";
export default function Buya2(){
    
    return(
        <div>
            <Head></Head>
           <BuyWatch image={a} name="Airpods " price="250" first="Airpods "
           second="3rd genration" pfirst="Custom high-excursion Apple driver" psecond="Skin-detect sensor"
           pthird="Motion-detecting accelerometer" pfourth="Siri Supported" sizef="Without Magsafe"
           sizes="With Magsafe" GPSf="Lightning Port" GPSs="USB-C" prop1="Magsafe" prop2="Port Type"
           >
           </BuyWatch>
        </div>
    )
}