import React from "react";
import BuyMac1 from "./Buymac";
const a="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-pro-tower-hero-cto?wid=596&hei=596&fmt=jpeg&qlt=95&.v=1684508267915";

const b="Customise your Mac Pro″";
const c="Mac Pro";
const d="Apple M3 chip with 24‑core CPU, 60‑core GPU, 32‑core Neural Engine";
const e="64GB unified memory";
const f="1TB SSD storage";
const g="";
const h="Stainless steel frame with feet";
const i="Magic Mouse";
const j="Magic Keyboard with Touch ID and Numeric Keypad - US English";
const k="512 GB SSD storage";
const l="1 TB SSD storage";
const n="2 TB SSD storage";
const o="30W USB-C Power Adapter";
const p="35W Dual USB-C Port Power Adapter";
const q="70W USB-C Power Adapter";
import { useNavigate } from "react-router-dom";
import Head from "../jsx/Header";

export default function Buyt7(){
    const navigate = useNavigate();
    return(
        <div>
            <Head></Head>
           
           <BuyMac1 image={a} first={b} second={c} pfirst={d} psecond={e} pthird={f}
           pfourth={g} pfifth={h} psixth={i} pseventh={j} memoryf="64 GB unified memory" 
           memorys="512 GB unified memory" memoryt="1 TB unified memory" storagef="2TB SSD storage"
           storages={k} storaget={l} storagefourth={n} Powerf={o} Powers={p} Powert={q}
           thanks="No,thanks" final="Final Cut Pro"  no="No,thanks" yes="Logic Pro"
           price="9000"
           >

           </BuyMac1>
        </div>
    )
}