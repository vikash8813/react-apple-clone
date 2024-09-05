import React from "react";
import "./Modal.css";
const a="https://www.linkedin.com/in/vipin-jangir-7b2a58285/";
import { useNavigate } from "react-router-dom";

export default function Modal({onclose}){
    const navigate=useNavigate();

    return(
        <div className="Modal">
            <div className="Modal1">
                <button onClick={onclose} className="Modalb1">X</button>
                <div className="Modal2">
                    <h2>Do you follow Vipin on Linkedin</h2>
                    <div className="Modal3">
                        <button onClick={()=>{navigate("/Order")}}>Yes</button>
                        <button><a href={a}>No</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}