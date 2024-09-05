import React from "react";
import "./Buymac.css";
import { useState } from "react";
import Modal from "./Modal";


export default function BuyWatch(props ){


    function func1(){
         setstate1(0);
    }
    const [state1,setstate1]=useState(0);
    const[state2, setstate2]=useState(0);
    const[show ,setshow]=useState(false);

    var a=state1+state2;
    return(
        <div className="BuyMac1">
            
   
          <div className="BuyMac1n1">

            <div className="BuyMac1n2">
                <img src={props.image}></img>
               <h4> size extension $ {state1}</h4>
               <h4> GPS extension $ {state2}</h4>
              
               <h3>Your {props.name} cost at  base price of   ${props.price} </h3>
               <h3>with additional of ${a}</h3>
               <button className="Deliver" onClick={()=>{setshow(true)}} >Deliver Product</button>
               {show && <Modal onclose={()=>{setshow(false)}} />}
            </div>

            <div className="BuyMac1n3">
            <h1>{props.first}</h1>
            <h1>{props.second}</h1>
            <p>{props.pfirst}</p>
            <p>{props.psecond}</p>
            <p>{props.pthird}</p>
            <p>{props.pfourth}</p>
           

            <h5>{props.prop1}</h5>
            <div className="memory">
                <button onClick={func1}>
                    {props.sizef}
                    </button>
                <button onClick={()=>{setstate1(40)}} >
                    {props.sizes}
                    </button>
               
            </div>

            <h5>{props.prop2}</h5>
            <div className="storage">
            <button onClick={()=>{setstate2(0)}}>{props.GPSf}</button>
            <button onClick={()=>{setstate2(70)}}>{props.GPSs}</button>
          
            </div> 
            
          </div>
          
          </div>
        
        </div>
    )
}