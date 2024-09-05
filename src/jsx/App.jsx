import React from "react";
import "./App.css";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App2 from "./App2";
import Store from "../Store/Store";
import Support from "../Support/Support";
import Acc from "../Accesories/Accesories";
import TvandHome from "../TV&HOME/TVandHome";
import AirPods from "../AirPods/AirPods";
import Watch from "../Watch/Watch";
import Ipad from "../iPad/ipad";
import Iphonemain from "../Iphone/Iphone";
import Macnn from "../Mac/Mac";
import Buytt from "../Buy/Mac13";
import Buyt2 from "../Buy/Mac15";
import Buyt3 from "../Buy/Mac14";
import Buyt4 from "../Buy/Mac16"
import Buyt5 from "../Buy/iMac";
import Buyt6 from "../Buy/Buymacmini";
import Buyt7 from "../Buy/BuyMacPro";
import Buyt8 from "../Buy/BuyStudio";
import Buyt9 from "../Buy/BuyProXDR";
import Buyt10 from "../Buy/BuyIpad1";
import Buyt11 from "../Buy/BuyIpadair";
import Buyt12 from "../Buy/BuyIpad";
import Buyt13 from "../Buy/BuyIphone15pro";
import Buyt14 from "../Buy/Buyiphone15";
import Buyt15 from "../Buy/Buyiphone14";
import Buyw1 from "../Buy/BuywatchSE";
import Buyw2 from "../Buy/BuyWatchSeries9";
import Buyw3 from "../Buy/BuyWatchUltra";
import Buya1 from "../Buy/BuyAirpodsPro";
import Buya2 from "../Buy/BuyAirpods3rd";
import Buya3 from "../Buy/BuyAirpods2nd";
import Buyh1 from "../Buy/BuyHomerPod";
import Buyh2 from "../Buy/BuyHomePodmini";
import Buyh3 from "../Buy/BuyAppleTv";
import Modal2 from "../Buy/Modal2";

export default function App(){
    return(
        <div className="Appp">
             <BrowserRouter>

                <Routes>
                    <Route exact path="/" element={<App2 />} />
                    <Route exact path="/store" element={<Store />} />
                     <Route exact path="/support" element={<Support />} />
                    <Route exact path="/Accessories" element={<Acc/>} />
                    <Route exact path="/Tv&Home" element={<TvandHome/>} />
                     <Route exact path="/AirPods" element={<AirPods/>}/>
                    <Route exact path="/Watch" element={<Watch/>} />
                     <Route exact path="/Ipad"  element={<Ipad/>} />
                     <Route exact path="/Iphone" element={<Iphonemain/>} />
                    <Route exact path="/Macnn" element={<Macnn/>} />
                    <Route exact path="/BuyMac" element={<Buytt/>} />
                    <Route exact path="/BuyMac15" element={<Buyt2/>} />
                    <Route exact path="/BuyMac14" element={<Buyt3/>} />
                    <Route exact path="/BuyMac16" element={<Buyt4/>} />
                    <Route exact path="/BuyiMac" element={<Buyt5/>} />
                    <Route exact path="/BuyMacmini" element={<Buyt6/>} />
                    <Route exact path="/BuyMacPro" element={<Buyt7/>} />
                    <Route exact path="/BuyStudioDisplay" element={<Buyt8/>} />
                    <Route exact path="/BuyProXDR" element={<Buyt9/>} />
                    <Route exact path="/BuyIpadPro" element={<Buyt10/>} />
                    <Route exact path="/BuyIpadAir" element={<Buyt11/>} />
                    <Route exact path="/BuyIpad" element={<Buyt12/>} />
                    <Route exact path="/BuyIphone15pro" element={<Buyt13/>} />
                    <Route exact path="/BuyIphone15" element={<Buyt14/>} />
                    <Route exact path="/BuyIphone14" element={<Buyt15/>} />
                    <Route exact path="/BuyWatchSE" element={<Buyw1/>} />
                    <Route exact path="/BuyWatchSeries9" element={<Buyw2/>} />
                    <Route exact path="/BuyWatchUltra" element={<Buyw3/>} />
                    <Route exact path="/BuyAirpodsPro" element={<Buya1/>} />
                    <Route exact path="/BuyAirpods3rdgen" element={<Buya2/>} />
                    <Route exact path="/BuyAirpods2ndgen" element={<Buya3/>} />
                    <Route exact path="/BuyHomePod" element={<Buyh1/>} />
                    <Route exact path="/BuyHomePodmini" element={<Buyh2/>} />
                    <Route exact path="/BuyAppleTV" element={<Buyh3/>} />
                    <Route exact path="/Order" element={<Modal2/>} />
                </Routes>
                
            </BrowserRouter>
        </div>
    )
}