import React from "react";
import "./Watch4.css";
const a="‡No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.";
const b="Apple Watch Series 9 and Apple Watch SE have a water resistance rating of 50 metres under ISO standard 22810:2010. This means that they may be used for shallow-water activities like swimming in a pool or ocean. However, they should not be used for scuba diving, waterskiing or other activities involving high-velocity water or submersion below shallow depth. Apple Watch Ultra 2 has a water resistance rating of 100 metres under ISO standard 22810. It may be used for recreational scuba diving (with compatible third-party app from the App Store) to 40 metres and high-speed water sports. Apple Watch Ultra 2 should not be used for diving below 40 metres. Water resistance is not a permanent condition and can diminish over time. For additional information, see support.apple.com/en-in/HT205000.";
const c="The ECG app is available on Apple Watch Series 4 and later (excluding Apple Watch SE) and can generate an ECG similar to a single-lead electrocardiogram. Intended for use by people 22 years old and over.";
const d="Apple Watch Series 9 and Apple Watch Ultra 2 are rated IP6X dust resistant.";
const e ="Only available with selected partners and locations, and requires eligible device and OS version";
const f="All-day battery life is based on the following use: 90 time checks, 90 notifications, 45 minutes of app use and a 60-minute workout with music playback from Apple Watch via Bluetooth, over the course of 18 hours; Apple Watch SE (2nd generation) (GPS) usage includes connection to iPhone via Bluetooth during the entire 18-hour test; Apple Watch SE (2nd generation) (GPS + Cellular) usage includes a total of 4 hours of LTE connection and 14 hours of connection to iPhone via Bluetooth over the course of 18 hours. Testing conducted by Apple in August 2022 using pre-production Apple Watch SE (2nd generation) (GPS) and Apple Watch SE (2nd generation) (GPS + Cellular), each paired with an iPhone; all devices tested with pre-release software. Battery life varies by use, configuration, cellular network, signal strength and many other factors; actual results will vary.";
const g="All-day battery life is based on the following use: 90 time checks, 90 notifications, 45 minutes of app use and a 60-minute workout with music playback from Apple Watch via Bluetooth, over the course of 18 hours; Apple Watch Series 9 (GPS) usage includes connection to iPhone via Bluetooth during the entire 18-hour test; Apple Watch Series 9 (GPS + Cellular) usage includes a total of 4 hours of LTE connection and 14 hours of connection to iPhone via Bluetooth over the course of 18 hours. Battery life in Low Power Mode is based on the following use: 180 time checks, 180 notifications, 90 minutes of app use and a 60-minute workout with music playback from Apple Watch via Bluetooth, over the course of 36 hours; Apple Watch Series 9 (GPS) usage includes connection to iPhone via Bluetooth during the entire 36-hour test; Apple Watch Series 9 (GPS + Cellular) usage includes on-demand LTE connection and 28 hours of connection to iPhone via Bluetooth over the course of 36 hours. Testing conducted by Apple in August 2023 using pre-production Apple Watch Series 9 (GPS) and Apple Watch Series 9 (GPS + Cellular), each paired with an iPhone; all devices tested with pre-release software. Battery life varies by use, configuration, cellular network, signal strength and many other factors; actual results will vary.";
const h="Charge times are from 0–80% and 0–100% using the included Apple Watch Magnetic Fast Charging USB-C Cable. Testing conducted by Apple in August 2023 using pre-production Apple Watch Series 9 (GPS) and Apple Watch Series 9 (GPS + Cellular), each paired with an iPhone; all devices tested with pre-release software, Apple Watch Magnetic Fast Charging USB-C Cable (Model A2515) and Apple 20W USB-C Power Adapter (Model A2305). Charge time varies with region, settings and environmental factors; actual results will vary.";



export default function Watch4(){
    return(
        <div className="Watch4">
            <p>{a}</p>
            <p>1. {b}</p>
            <p >2. {c}</p>
            <p>3.{d}</p>
            <p>4. {e}</p>
            <p>5.{f}</p>
            <p>6.{g}</p>
            <p className="Watchh">7. {h}</p>
        </div>
    )
}