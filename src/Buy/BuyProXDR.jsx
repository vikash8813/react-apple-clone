import React from "react";
import BuyMac1 from "./Buymac";
const a="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/pro-display-hero?wid=820&hei=474&fmt=jpeg&qlt=95&.v=1572384750703";
const b="Customize your Display″";
const c=" Pro XDR Display";
const d="Apple M3 chip with 8‑core CPU, 10‑core GPU, 16‑core Neural Engine";
const e="8GB unified memory";
const f="256GB SSD storage";
const g="A 6K Retina display with stellar camera";
const h="Tilt adjustable";
const i="Height adjustable";
const j="Nano textue glass";
const k="512 GB SSD storage";
const l="1 TB SSD storage";
const n="2 TB SSD storage";
const o="30W USB-C Power Adapter";
const p="35W Dual USB-C Port Power Adapter";
const q="70W USB-C Power Adapter";
import Head from "../jsx/Header";
import { useNavigate } from "react-router-dom";

export default function Buyt9(){
    const navigate = useNavigate();
    return(
        <div>
            <Head></Head>

            

           <BuyMac1 image={a} first={b} second={c} pfirst={d} psecond={e} pthird={f}
           pfourth={g} pfifth={h} psixth={i} pseventh={j} memoryf="8 GB unified memory" 
           memorys="16 GB unified memory" memoryt="24 GB unified memory" storagef="256GB SSD storage"
           storages={k} storaget={l} storagefourth={n} Powerf={o} Powers={p} Powert={q}
           thanks="No,thanks" final="Final Cut Pro"  no="No,thanks" yes="Logic Pro"
           price="6000"
           >
            
           </BuyMac1>
           
       
        </div>
    )
}