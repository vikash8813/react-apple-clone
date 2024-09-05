import React from "react";
import BuyMac1 from "./Buymac";
const a="https://www.apple.com/newsroom/images/product/ipad/lifestyle/Apple-iPad-Pro-Magic-Keyboard-M2-hero-2up-221018_big.jpg.large.jpg";
const b="Customize your iPad″";
const c=" iPad Pro";
const d="Apple M3 chip with 8‑core CPU, 10‑core GPU, 16‑core Neural Engine";
const e="8GB unified memory";
const f="256GB SSD storage";
const g="A Liquid Retina XDR Display";
const h="Face ID";
const i="All day battery life.";
const j="Wifi 6E";
const k="512 GB SSD storage";
const l="1 TB SSD storage";
const n="2 TB SSD storage";
const o="30W USB-C Power Adapter";
const p="35W Dual USB-C Port Power Adapter";
const q="70W USB-C Power Adapter";
import Head from "../jsx/Header";
import { useNavigate } from "react-router-dom";

export default function Buyt10(){
    const navigate = useNavigate();
    return(
        <div>
            <Head></Head>

            

           <BuyMac1 image={a} first={b} second={c} pfirst={d} psecond={e} pthird={f}
           pfourth={g} pfifth={h} psixth={i} pseventh={j} memoryf="8 GB unified memory" 
           memorys="16 GB unified memory" memoryt="24 GB unified memory" storagef="256GB SSD storage"
           storages={k} storaget={l} storagefourth={n} Powerf={o} Powers={p} Powert={q}
           thanks="No,thanks" final="Final Cut Pro"  no="No,thanks" yes="Logic Pro"
           price="1600"
           >
            
           </BuyMac1>
           
       
        </div>
    )
}