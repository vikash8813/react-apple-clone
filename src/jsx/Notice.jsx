import React from "react";
import Foot from "./footer";
import "../css/notice.css"
const a=" ‡No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading banks. Until 6 August 2024, No Cost EMI is available with the purchase of an eligible iPhone made using qualifying cards on 3-, 6-, 9-, 12-, 18- or 24-month tenures from most leadings banks. Monthly pricing is";
const b ="rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Terms apply. ";
const c="Based on a 6-month tenure. ₹79600.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3370.00, paid over 6 months as six monthly payments of ₹13267.00.";
const d="Based on a 24-month tenure. ₹79600.00 total cost includes 15% p.a. and No Cost EMI savings of ₹11197.00, paid over 24 months as 24 monthly payments of ₹3317.00.";
const e="*Qualified purchasers can receive promotion savings when they purchase an eligible product with promotion product at a qualifying location. Only one promotion product per eligible product per qualified purchaser. Offer is subject to availability. Subject to terms and conditions herein.";
const f="1. Apple Intelligence will be available in beta on iPhone 16 Pro, iPhone 16 Pro Max, and iPad and Mac with M1 and later, with Siri and device language set to US English, as part of iOS 19, iPadOS 19 and macOS Sequoia later this year.";
const g="Some features, additional languages and platforms will be coming over the course of the next year.";


export default function Notice(){
return (
    <div className="notice">
        
        <div className="nocost">
        {a} {b}
        <p>Representative example:</p>
        <p>{c}</p>
        <p>{d}</p>
        <p>{e}</p>
        <p>{f}</p>
        <p style={{marginBottom:20}}>{g}</p>
        </div>
        <Foot></Foot>

    </div>
)

}