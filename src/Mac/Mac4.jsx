import "./Mac4.css";
import React from "react";
const a="*Listed pricing is Maximum Retail Price (inclusive of all taxes).";
const b="No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice.";
const c="Qualified purchasers can receive promotion savings when they purchase an eligible product with promotion product at a qualifying location. Only one promotion product per eligible product per qualified purchaser. Offer is subject to availability.";
const d="1. Software and content may be sold separately. Title availability is subject to change."
const e="2. SMS requires an iPhone or iPad with iOS 8.1 or later or iPadOS. iPhone calls require an iPhone with iOS 8 or later.";
const f="3. Mac, iPad and Apple Watch trade-in is available only in-store in India. Apple Retail Online in India does not offer trade-in for Mac, iPad and Apple Watch. Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade‑in value may be applied towards a qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel or limit the quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.";
const g="4. Screen size is measured diagonally. The displays on the 13″ MacBook Air and 15″ MacBook Air and the 14″ MacBook Pro and 16″ MacBook Pro have rounded corners at the top. When measured as a standard rectangular shape, the screens are 34.46 cm (13.6″), 38.91 cm (15.3″), 35.97 cm (14.2″) and 41.05 cm (16.2″) diagonally (actual viewable area is less).";
const h="5. Testing conducted by Apple in January 2024 using pre-production 15″ MacBook Air systems with Apple M3, 8‑core CPU and 10‑core GPU; and pre-production 13″ MacBook Air systems with Apple M3, 8‑core CPU and 8‑core GPU, all configured with 8GB of RAM and 256GB SSD. Testing conducted by Apple in May 2022 using pre-production 13″ MacBook Air systems with Apple M2, 8‑core CPU, 8‑core GPU, 8GB of RAM and 256GB SSD. The wireless web test measures battery life by wirelessly browsing 25 popular websites with display brightness set to 8 clicks from the bottom. The Apple TV app movie playback test measures battery life by playing back HD 1080p content with display brightness set to 8 clicks from the bottom. Battery life varies by use and configuration. See apple.com/in/batteries for more information.";
const i="6. Testing conducted by Apple in September and October 2023 using pre-production 16″ MacBook Pro systems with Apple M3 Pro, 12-core CPU, 18-core GPU, 36GB of RAM and 512GB SSD. The Apple TV app movie playback test measures battery life by playing back HD 1080p content with display brightness set to 8 clicks from the bottom. Battery life varies by use and configuration. ";
const j="7. Actual diagonal screen size is 59.69 cm (23.5″).";
const k="Some features require an Apple ID, compatible hardware and compatible Internet access or cellular network; additional fees and terms may apply.";


export default function Mac4(){
    return(
        <div className="Mac4">
            <p style={{marginTop:0}}>{a}</p>
            <p>{b}</p>
            <p>{c}</p>
            <p>{d}</p>
            <p>{e}</p>
            <p>{f}</p>
            <p>{g}</p>
            <p>{h}</p>
            <p>{i}</p>
            <p>{j}</p>
            <p>{k}</p>
        </div>
    )
}