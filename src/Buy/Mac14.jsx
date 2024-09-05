import React from "react";
import BuyMac1 from "./Buymac";
const a="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=95&.v=1697913381764";

const b="Customise your 14″";
const c="MacBook Air - Midnight";
const d="Apple M3 chip with 8‑core CPU, 10‑core GPU, 16‑core Neural Engine";
const e="8GB unified memory";
const f="256GB SSD storage";
const g="35.97cm (14.2″) Liquid Retina XDR display";
const h="1080p FaceTime HD camera";
const i="MagSafe 3 charging port";
const j="Two Thunderbolt / USB 4 ports/HDMI port, SDXC card slot, headphone jack,";
const k="512 GB SSD storage";
const l="1 TB SSD storage";
const n="2 TB SSD storage";
const o="30W USB-C Power Adapter";
const p="35W Dual USB-C Port Power Adapter";
const q="70W USB-C Power Adapter";
import { useNavigate } from "react-router-dom";
import Head from "../jsx/Header";

export default function Buyt3(){
    const navigate = useNavigate();
    return(
        <div>
            <Head></Head>
            <div style={{display:"flex", marginTop:40,marginBottom:40,alignItems:"center",backgroundColor:"#dddddd43"}}>
                <h1 style={{fontFamily:"Arial",marginLeft:270}}> Do you want to Buy 16inch Varient </h1>
                <button onClick={()=>{navigate("/BuyMac16")}}  style={{marginLeft:50,fontSize:20,paddingTop:20,paddingBottom:20,borderRadius:15,backgroundColor:"black",color:"white",paddingLeft:30,paddingRight:30}}>Click</button>
            </div>
           <BuyMac1 image={a} first={b} second={c} pfirst={d} psecond={e} pthird={f}
           pfourth={g} pfifth={h} psixth={i} pseventh={j} memoryf="8 GB unified memory" 
           memorys="16 GB unified memory" memoryt="24 GB unified memory" storagef="256GB SSD storage"
           storages={k} storaget={l} storagefourth={n} Powerf={o} Powers={p} Powert={q}
           thanks="No,thanks" final="Final Cut Pro"  no="No,thanks" yes="Logic Pro"
           price="2000"
           >

           </BuyMac1>
        </div>
    )
}