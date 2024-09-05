import React from "react";
import { useNavigate } from "react-router-dom";
const a="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_imac_24__inq0od011wuq_large.png";
const b="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mac_pro__6q3qt8073f6e_large.png";           
const c=" https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mac_studio__c24lhkuq4vee_large.png   "


export default function Mac3n2(){
    const navigate = useNavigate();
    return(
        <div className="Mac3n1">

                <div className="Mac3n1n1">
                <img style={{marginTop:35}}  src={a}></img>
                <h2>iMac</h2>
                <h3>M3 chip</h3>
                <p>A stunning all-in-one desktop for</p>
                <p>creativity and productivity.</p>
                <h4>From $1500</h4>
                <button onClick={()=>{navigate("/Store")}}>Learn more</button>
                <button onClick={()=>{navigate("/BuyiMac")}}>Buy</button>
                </div>

                <div className="Mac3n1n1">
                <img src={b}></img>
                <h2>Mac Pro</h2>
                <h3>M2 Ultra chip</h3>
                <p>A pro workstation with PCIe expansion</p>
                <p>for demanding workflows.</p>
                <h4>From $9000*</h4>
                <button onClick={()=>{navigate("/Store")}}>Learn more</button>
                <button onClick={()=>{navigate("/BuyMacPro")}}>Buy</button>
                </div>

                <div className="Mac3n1n1">
                <img style={{marginTop:245}} src={c}></img>
                <h2>Mac Pro</h2>
                <h3>M2 Ultra chip</h3>
                <p>A pro workstation with PCIe expansion</p>
                <p>for demanding workflows.</p>
                <h4>From $9000*</h4>
                <button onClick={()=>{navigate("/Store")}}>Learn more</button>
               <button  onClick={()=>{navigate("/BuyMacmini")}}>Buy</button>
                </div>
        </div>
    )
}