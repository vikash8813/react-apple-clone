import React, { useState } from "react";
const a="https://cm.magefan.com/magefan_blog/custom-block-on-checkout-success-page-magento4.png";
import "./Modal2.css";

export default function Modal2(){
   const[state ,setstate]=useState("");
   const[state2,setstate2]=useState("");

    function Handle(){
      setstate("Processing ....");
      setTimeout(() => {
        setstate("Do not close this page...")
      }, 3000);

      setTimeout(() => {
        setstate("Making Payment...");
      }, 6000);
      setTimeout(() => {
        setstate("Congratulation you order")
        setstate2(" is confirmed");
      }, 9000);
    }
  
    return(
        <div className="Page">
           <img className="Page2" src={a}></img>
           <h2>Thank you for being on this page</h2>
           <button onClick={Handle}>Make Payment</button>

           <h1>{state}</h1>
           <p>{state2}</p>
        </div>
    )
}