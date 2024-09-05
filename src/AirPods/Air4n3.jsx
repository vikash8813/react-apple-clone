import React from "react";
import "./Air4n3.css";
const a="https://www.apple.com/newsroom/images/product/apple-music/Apple-Music-Replay-Top-Album_inline.jpg.large.jpg";


export default function Air4n3(){
    return (
        <div className="Air4n3">
            <img src={a}></img>
            <div className="Air4n1n1">
            <p>Audio Sharing</p>
            <button>+</button>
            </div>
        </div>
    )
}