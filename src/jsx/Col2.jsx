import React from "react";
import "../css/col2.css";
import { useNavigate } from "react-router-dom";

export default function Col2(){
    const navigate = useNavigate();
    return (
        <div style={{display:"flex",alignItems:"center"}}>

            <div className="third">
               <p className="AI">Apple Intelligence</p>
              <p className="rest">AI for the rest  of us.</p>
              <p style={{color:"gray",textAlign:"center",fontSize:20}}>Coming in beta in US English later this year</p>
              
             <a href="https://www.youtube.com/watch?v=Q_EYoV1kZWk"><button  className="film">Watch the film</button></a> 
              <img className="Aimages" src="https://miro.medium.com/v2/resize:fit:980/1*ZTDOQFdK_NHn6hQJQm-D8w.jpeg"></img>

            </div>

            <div className="fourth">
                <p className="AI">MacBook Pro</p>
                <p className="rest">Mind-blowing.Head-turning.</p>
                <button onClick={()=>{navigate("/Store")}} className="learn6">Learn more</button>
                <button onClick={()=>{navigate("/Macnn")}} className="buy"> Buy</button>
                <img  className="m3photo"  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/og-macbook-pro-202310?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1697039356093"></img>

            </div>
         
        </div>
        
    )
}