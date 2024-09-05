import BuyWatch from "./BuyWatch";
const a="https://m.media-amazon.com/images/I/616bgkA2J0L._AC_UF1000,1000_QL80_.jpg";
import Head from "../jsx/Header";
export default function Buyh3(){
    
    return(
        <div>
            <Head></Head>
           <BuyWatch image={a} name="Apple Tv " price="200" first="Apple Tv "
           second="Tv of house" pfirst="High quality experience" psecond="With Ethernet"
           pfourth="Siri Supported" sizef="White"
           sizes="Black" GPSf="Without Ethernet" GPSs="With Ethernet" prop1="Colour" prop2="Ethernet"
           >
           </BuyWatch>
        </div>
    )
}