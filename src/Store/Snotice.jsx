import React from "react";
import "./Snotice.css";
const a="§ No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3 or 6 month tenures from most leading banks. Until 6 August 2024, No Cost EMI is available with the purchase of an eligible iPhone made using qualifying cards on 3, 6, 9, 12, 18, 24 month tenures from most leadings banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank's terms and conditions. Minimum order spend applies as per your card issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuing bank.";
const b="Apple Education Pricing is available to current and newly accepted university students and their parents, as well as teachers and staff at all levels. Quantity limits apply. During the promotional period only and cannot be combined with non-promotional Apple Education Pricing. AppleCare+ attached to eligible products outside of the promotional period is not eligible for this promotional rate.";
const c="* Mac, iPad, and Apple Watch trade-in is available only in-store in India. Apple Retail Online in India does not offer trade-in for Mac, iPad, and Apple Watch. Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade‑in value may be applied towards a qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel or limit the quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.";
const d=" New subscribers only. ₹99/month after trial. Offer is available for new Apple Music subscribers with a new eligible device for a limited time only. Offer redemption for eligible audio devices requires connecting or pairing to an Apple device running the latest iOS or iPadOS. Offer redemption for Apple Watch requires connecting or pairing to an iPhone running the latest iOS. Offer good for three months after eligible device activation. Only one offer per Apple ID, regardless of the number of eligible devices you purchase. Plan automatically renews until cancelled. Restrictions and other terms(opens in new window) apply taxes.";


export default function Snotice(){
    return (
        <div className="Snotice">
            <div className="Snotice2">
            <h4>{a}</h4>
            <p>{b}</p>
            <p>{c}</p>
            <p>{d}</p>
            </div>
            
        </div>
    )
}