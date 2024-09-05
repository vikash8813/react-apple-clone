import React from "react";
import "./ipad4.css";
const a="*Listed pricing is Maximum Retail Price (inclusive of all taxes).";
const b="‡No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice.";
const c="◊Qualified purchasers can receive promotion savings when they purchase an eligible product with promotion product at a qualifying location. Only one promotion product per eligible product per qualified purchaser. Offer is subject to availability. ";
const d="Accessories are sold separately.";
const e="Data plan is required. 5G is available in selected markets and through selected carriers. For details on 5G support, contact your carrier ";
const f="The displays have rounded corners. When measured diagonally as a rectangle, the 13″ iPad Pro is 33.02 cm (13″), the 11″ iPad Pro is 28.22 cm (11.1″), the 13″ iPad Air is 32.78 cm (12.9″), the 11″ iPad Air is 27.59 cm (10.86″), iPad (10th generation) is 27.58 cm (10.86″) and the iPad mini is 21.08 cm (8.3″). Actual viewable area is less.";
const g="USB-C to Apple Pencil Adapter is required to work with iPad (10th generation). Subject to availability."
const h="Mac, iPad and Apple Watch trade-in is available only in-store in India. Apple Retail Online in India does not offer trade-in for Mac, iPad and Apple Watch. Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade‑in value may be applied towards a qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel or limit the quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.";
const i="You can return your iPad even if you engrave it. And when you’re ready to upgrade, it won’t change your trade‑in value.";
const j="Apps are available on the App Store. Title availability is subject to change.";


export default function Ipad4(){
    return(
        <div className="Ipad4">
            <p>{a}</p>
            <p>{b}</p>
            <p>{c}</p>
            <p>1. {d}</p>
            <p>2. {e}</p>
            <p>3. {f}</p>
            <p>4. {g}</p>
            <p>5. {h}</p>
            <p>6. {i}</p>
            <p>7. {j}</p>
        </div>

    )
}