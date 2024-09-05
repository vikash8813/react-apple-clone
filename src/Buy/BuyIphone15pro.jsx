import React from "react";
import BuyMac1 from "./Buymac";
const a="https://m.media-amazon.com/images/I/71jLVXGDpuL._AC_UF1000,1000_QL80_.jpg"
const b="Customise your Iphone″";
const c="Iphone 15 Pro";
const d="Apple a17 probionic chip";
const e="64GB unified memory";
const f="1TB SSD storage";
const g="new Proes Log";
const h="All new Titanium frame";
const i="48mp camera";
const j="With Apple intelligence";
const k="512 GB SSD storage";
const l="1 TB SSD storage";
const n="2 TB SSD storage";
const o="30W USB-C Power Adapter";
const p="35W Dual USB-C Port Power Adapter";
const q="70W USB-C Power Adapter";
import { useNavigate } from "react-router-dom";
import Head from "../jsx/Header";

export default function Buyt13(){
    const navigate = useNavigate();
    return(
        <div>
            <Head></Head>
           
           <BuyMac1 image={a} first={b} second={c} pfirst={d} psecond={e} pthird={f}
           pfourth={g} pfifth={h} psixth={i} pseventh={j} memoryf="64 GB unified memory" 
           memorys="512 GB unified memory" memoryt="1 TB unified memory" storagef="2TB SSD storage"
           storages={k} storaget={l} storagefourth={n} Powerf={o} Powers={p} Powert={q}
           thanks="No,thanks" final="Final Cut Pro"  no="No,thanks" yes="Logic Pro"
           price="1500" name="Iphone 15 pro"
           >

           </BuyMac1>
        </div>
    )
}