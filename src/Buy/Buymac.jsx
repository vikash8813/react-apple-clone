import React from "react";
import "./Buymac.css";
import { useState } from "react";
import Modal from "./Modal";


export default function BuyMac1(props){
    const [show ,setshow]=useState(false)

    function func1(){
         setstate1(0);
    }
    const [state1,setstate1]=useState(0);
    const[state2, setstate2]=useState(0);
    const[state3, setstate3]=useState(0);
    const[state4, setstate4]=useState(0);
    const[state5, setstate5]=useState(0);

    var a=state1+state2+state3+state4+state5;
    return(
        <div className="BuyMac1">
            
       

          <div className="BuyMac1n1">

            <div className="BuyMac1n2">
                <img src={props.image}></img>
               <h4> Memory extension $ {state1}</h4>
               <h4> Storage extension $ {state2}</h4>
               <h4>  Power extension$ {state3}</h4>
               <h4>Software extension ${state4}</h4>
               <h4>Logic pro extension ${state5}</h4>
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
            <p>{props.pfifth}</p>
            <p>{props.psixth}</p>
            <p>{props.pseventh}</p>

            <h5>Memory</h5>
            <div className="memory">
                <button onClick={func1}>
                    {props.memoryf}
                    </button>
                <button onClick={()=>{setstate1(538)}} >
                    {props.memorys}
                    </button>
                <button onClick={()=>{setstate1(580)}}>
                    {props.memoryt}
                    </button>
            </div>

            <h5>Storage</h5>
            <div className="storage">
            <button onClick={()=>{setstate2(0)}}>{props.storagef}</button>
            <button onClick={()=>{setstate2(538)}}>{props.storages}</button>
            <button onClick={()=>{setstate2(580)}}>{props.storaget}</button>
            <button onClick={()=>{setstate2(900)}}>{props.storagefourth}</button>
            </div>

            <h5>Power Adapter</h5>
            <div className="Power">
            <button onClick={()=>{setstate3(13)}}>{props.Powerf}</button>
            <button onClick={()=>{setstate3(53)}}>{props.Powers}</button>
            <button onClick={()=>{setstate3(53)}}>{props.Powert}</button>
            </div>

            <h5>Pre-installed Software</h5>
            <div className="pre">
                <button onClick={()=>{setstate4(0)}}>{props.thanks}</button>
                <button onClick={()=>{setstate4(358)}}>{props.final}</button>
            </div>

            <h5>Logic Pro</h5>
            <div className="Logic">
            <button onClick={()=>{setstate5(0)}}>{props.no}</button>
            <button onClick={()=>{setstate5(358)}}>{props.yes}</button>
            </div>
           
          </div>
          </div>
        </div>
    )
}