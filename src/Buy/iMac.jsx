import React from "react";
import BuyMac1 from "./Buymac";
const a="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-no-id-blue-cto-hero-202310?wid=1254&hei=1132&fmt=jpeg&qlt=95&.v=1699550956870";

const b="Customise your Blue iMac″";
const c="Blue iMac";
const d="Apple M3 chip with 8‑core CPU with 4 performance cores and 4 efficiency";
const e="8GB unified memory";
const f="256GB SSD storage";
const g="35.97cm (14.2″) Liquid Retina XDR display";
const h="Magic Keyboard - US English";
const i="Magic Mouse";
const j="Two Thunderbolt / USB 4 port";
const k="512 GB SSD storage";
const l="1 TB SSD storage";
const n="2 TB SSD storage";
const o="30W USB-C Power Adapter";
const p="35W Dual USB-C Port Power Adapter";
const q="70W USB-C Power Adapter";
import { useNavigate } from "react-router-dom";
import Head from "../jsx/Header";

export default function Buyt5(){
    const navigate = useNavigate();
    return(
        <div>
            <Head></Head>
           
           <BuyMac1 image={a} first={b} second={c} pfirst={d} psecond={e} pthird={f}
           pfourth={g} pfifth={h} psixth={i} pseventh={j} memoryf="8 GB unified memory" 
           memorys="16 GB unified memory" memoryt="24 GB unified memory" storagef="256GB SSD storage"
           storages={k} storaget={l} storagefourth={n} Powerf={o} Powers={p} Powert={q}
           thanks="No,thanks" final="Final Cut Pro"  no="No,thanks" yes="Logic Pro"
           price="1400" name="iMac"
           >

           </BuyMac1>
        </div>
    )
}