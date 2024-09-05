import React from "react";
import BuyMac1 from "./Buymac";
const a="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708672623/Croma%20Assets/Communication/Mobiles/Images/261930_0_iqucoc.png?tr=w-600"
const b="Customise your Iphone″";
const c="Iphone 14 ";
const d="Apple a15 bionic chip";
const e="64GB unified memory";
const f="1TB SSD storage";
const g="Photonic Engine";
const h="with Aluminium frame";
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

export default function Buyt15(){
    const navigate = useNavigate();
    return(
        <div>
            <Head></Head>
           
           <BuyMac1 image={a} first={b} second={c} pfirst={d} psecond={e} pthird={f}
           pfourth={g} pfifth={h} psixth={i} pseventh={j} memoryf="64 GB unified memory" 
           memorys="512 GB unified memory" memoryt="1 TB unified memory" storagef="2TB SSD storage"
           storages={k} storaget={l} storagefourth={n} Powerf={o} Powers={p} Powert={q}
           thanks="No,thanks" final="Final Cut Pro"  no="No,thanks" yes="Logic Pro"
           price="800" name="Iphone 14"
           >

           </BuyMac1>
        </div>
    )
}