import React from "react";
import BuyMac1 from "./Buymac";
const a="https://images-cdn.ubuy.co.in/64afd6b0d9c85027ef3e7c9f-2022-apple-10-9-inch-ipad-wi-fi-64gb.jpg";
const b="Customise your iPad″";
const c="iPad";
const d="Apple M3 chip with 8‑core CPU, 10‑core GPU, 16‑core Neural Engine";
const e="8GB unified memory";
const f="256GB SSD storage";
const g="iPad 10.9 inch ";
const h="10.9 inch liquid retina display";
const i="wifi-6 ";
const j="12mp Front/12mp back";
const k="512 GB SSD storage";
const l="1 TB SSD storage";
const n="2 TB SSD storage";
const o="30W USB-C Power Adapter";
const p="35W Dual USB-C Port Power Adapter";
const q="70W USB-C Power Adapter";
import Head from "../jsx/Header";
import { useNavigate } from "react-router-dom";

export default function Buyt12(){
    const navigate = useNavigate();
    return(
        <div>
            <Head></Head>

           

           <BuyMac1 image={a} first={b} second={c} pfirst={d} psecond={e} pthird={f}
           pfourth={g} pfifth={h} psixth={i} pseventh={j} memoryf="8 GB unified memory" 
           memorys="16 GB unified memory" memoryt="24 GB unified memory" storagef="256GB SSD storage"
           storages={k} storaget={l} storagefourth={n} Powerf={o} Powers={p} Powert={q}
           thanks="No,thanks" final="Final Cut Pro"  no="No,thanks" yes="Logic Pro"
           price="550" name="Ipad"
           >
            
           </BuyMac1>
           
       
        </div>
    )
}