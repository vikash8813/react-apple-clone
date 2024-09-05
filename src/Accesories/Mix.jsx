import React from "react";
import "./Mix.css";
const a="https://www.91-cdn.com/hub/wp-content/uploads/2023/09/iphone-14-plus-1.jpg";

export default function Mix(){
    return (
        <div className="Mixnew1">

          <div className="Mixnew2">
            <h1>Mix.Match.</h1>
            <h1>MagSafe.</h1>
            <p>Snap on a case, wallet or wireless charger.</p>
            <a>Shop MagSafe</a>
          </div>

            <div className="Mixnew3">
            <img src={a}></img>
            </div>
        </div>
    )
}